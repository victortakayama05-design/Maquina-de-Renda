import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export default async function BillingPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();
  let planTier = 'free';
  let subscriptionStatus = 'none';

  if (session) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_tier, subscription_status')
      .eq('id', session.user.id)
      .single();
    
    if (profile) {
      planTier = profile.plan_tier || 'free';
      subscriptionStatus = profile.subscription_status || 'none';
    }
  }

  const isElite = planTier === 'elite' && subscriptionStatus === 'active';

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Cobrança & Assinatura</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Gerencie seu plano atual e faturas da plataforma Máquina de Renda.</p>
      </div>

      {/* Current Plan Card */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '4px', color: 'var(--primary)' }}>
            {isElite ? 'Plano Afiliado Elite' : 'Plano Gratuito (Limitado)'}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {isElite ? 'Operação multicanal para vendas orgânicas via WhatsApp' : 'Você precisa assinar para liberar robôs e operações multicanal.'}
          </p>
          
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isElite ? (
              <>
                <div style={{ padding: '4px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: '20px', color: 'var(--success)', fontSize: '12px', fontWeight: 600 }}>Ativo</div>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Integração com Stripe e IA Padrão liberados.</span>
              </>
            ) : (
              <div style={{ padding: '4px 12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--error)', borderRadius: '20px', color: 'var(--error)', fontSize: '12px', fontWeight: 600 }}>Inativo</div>
            )}
          </div>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '32px' }}>R$ 497<span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>/mês</span></h2>
          {!isElite && (
            <Link href="/dashboard/checkout">
              <button className="btn-primary" style={{ marginTop: '12px' }}>Assinar Agora (Checkout)</button>
            </Link>
          )}
        </div>
      </div>

      {/* Histórico Vazio para o Piloto */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>Histórico de Faturas</h2>
        
        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--glass-border)', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            <div>DATA</div>
            <div>PLANO</div>
            <div>VALOR</div>
            <div>STATUS</div>
          </div>
          
          <div style={{ padding: '32px', textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
            {isElite ? 'Faturas recentes via Stripe aparecerão em breve.' : 'Nenhuma assinatura ativa encontrada no seu perfil.'}
          </div>
        </div>
      </div>
    </div>
  );
}
