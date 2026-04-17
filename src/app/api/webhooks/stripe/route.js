import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const payload = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature falhou.', err.message);
    return NextResponse.json({ error: 'Webhook signature verification failed.' }, { status: 400 });
  }

  // Lidar com o evento de pagamento
  try {
    switch (event.type) {
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        
        // Assinatura atrelada ao Customer ID
        const customerId = invoice.customer;
        const subscriptionId = invoice.subscription;
        
        // Puxa UUID do cliente salvo no webhook metadata (ou via API Customer)
        const customer = await stripe.customers.retrieve(customerId);
        const supabaseUUID = customer.metadata?.supabaseUUID;

        if (supabaseUUID) {
          // Extrair o Price ID da fatura
          const lineItems = invoice.lines?.data || [];
          const priceId = lineItems[0]?.price?.id;
          
          let resolvedPlanTier = 'elite';
          
          if (priceId) {
            try {
              const priceObj = await stripe.prices.retrieve(priceId);
              if (priceObj.metadata && priceObj.metadata.tier) {
                resolvedPlanTier = priceObj.metadata.tier;
              }
            } catch(e) {
              console.log('[WEBHOOK] Nao consegui ler os metadados do preco:', e.message);
            }
          }
          
          console.log(`[WEBHOOK] Iniciando update do Supabase para user ${supabaseUUID} com plano ${resolvedPlanTier}`);
          
          // Atualiza a tabela profiles
          const { error: dbError } = await supabase
            .from('profiles')
            .update({
              plan_tier: resolvedPlanTier,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              subscription_status: 'active'
            })
            .eq('id', supabaseUUID);
            
          if (dbError) {
            console.error('[WEBHOOK] Erro CRÍTICO ao atualizar supabase db:', dbError);
          } else {
            console.log(`[WEBHOOK] Sucesso absoluto! Cliente promovido para ${resolvedPlanTier}: ${supabaseUUID}`);
          }
        } else {
          console.error('[WEBHOOK] ERRO: Fatura não contém metadata supabaseUUID atrelada ao Customer!');
        }
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        
        await supabase
          .from('profiles')
          .update({
            plan_tier: 'free',
            subscription_status: 'canceled'
          })
          .eq('stripe_customer_id', customerId);
          
        console.log(`[WEBHOOK] Assinatura Cancelada para customer: ${customerId}`);
        break;
      }

      default:
        console.log(`[WEBHOOK] Evento Unhandled type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error('Falha interna do Webhook:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
