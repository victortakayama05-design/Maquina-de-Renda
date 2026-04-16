import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
        },
      }
    );

    const { data: { session }, error: authError } = await supabase.auth.getSession();
    
    if (authError || !session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const planKey = body.plan || 'elite'; // Default to elite if none provided
    
    let priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE || 'price_1TMyqRD8EK0K9tZ4dXI9aFRp';
    
    if (planKey === 'starter') {
      priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER || 'price_1TMyqQD8EK0K9tZ4lZQai6Bx';
    } else if (planKey === 'pro') {
      priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || 'price_1TMyqSD8EK0K9tZ4Rnctygzf';
    }

    if (!priceId) {
      return NextResponse.json({ error: 'Erro de precificação: Price ID não encontrado no servidor.' }, { status: 400 });
    }

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email: session.user.email,
      metadata: {
        supabaseUUID: session.user.id
      }
    });

    // Create Subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    return NextResponse.json({
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      subscriptionId: subscription.id,
    });
  } catch (error) {
    console.error('Erro no Checkout API:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
