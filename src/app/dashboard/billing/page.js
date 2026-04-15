"use client";

export default function BillingPage() {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Cobrança & Assinatura</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Gerencie seu plano atual e faturas da plataforma Máquina de Renda.</p>
      </div>

      {/* Current Plan Card */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '4px', color: 'var(--primary)' }}>Plano Afiliado Elite</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Operação multicanal para vendas orgânicas via WhatsApp</p>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ padding: '4px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: '20px', color: 'var(--success)', fontSize: '12px', fontWeight: 600 }}>Ativo</div>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Renova em 15 de Maio de 2026</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '32px' }}>R$ 197<span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>/mês</span></h2>
          <button className="btn-secondary" style={{ marginTop: '12px' }}>Gerenciar Assinatura (Stripe)</button>
        </div>
      </div>

      {/* Basic Billing History UI Component */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>Histórico de Faturas</h2>
        
        <div style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--glass-border)', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            <div>DATA</div>
            <div>PLANO</div>
            <div>VALOR</div>
            <div>STATUS</div>
          </div>
          
          {/* Fatura Exemplo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px', alignItems: 'center' }}>
            <div>15/04/2026</div>
            <div>Afiliado Elite</div>
            <div>R$ 197,00</div>
            <div><span style={{ padding: '4px 8px', background: 'var(--success)', color: 'white', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>PAGO</span></div>
          </div>
          
          <div style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Nenhuma outra fatura no histórico.
          </div>
        </div>
      </div>
    </div>
  );
}
