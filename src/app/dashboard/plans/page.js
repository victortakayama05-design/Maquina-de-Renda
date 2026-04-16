import Link from 'next/link';

export default function PlansPage() {
  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Planos de Assinatura</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Selecione o melhor combustível para sua máquina.</p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', width: '100%' }}>
        
        {/* Starter */}
        <div className="glass-panel" style={{ flex: '1 1 280px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Starter Vendas</h2>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700 }}>R$ 97</span><span style={{ color: 'var(--text-secondary)' }}>/mês</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, fontSize: '14px', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '12px' }}>✔️ Agente Closer (Vendas) 24/7</li>
            <li style={{ marginBottom: '12px' }}>✔️ Setup de Produto Rápido</li>
            <li style={{ marginBottom: '12px' }}>✔️ Painel de Leads básico</li>
            <li style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.3)' }}>❌ Criação de Conteúdo (Reels)</li>
            <li style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.3)' }}>❌ Gestão de Redes Sociais</li>
          </ul>
          <Link href={`/dashboard/checkout?plan=starter`}>
            <button className="btn-secondary" style={{ width: '100%', marginTop: '24px' }}>Assinar Starter</button>
          </Link>
        </div>

        {/* Elite */}
        <div className="glass-panel" style={{ flex: '1 1 280px', padding: '32px', display: 'flex', flexDirection: 'column', border: '1px solid var(--primary)', position: 'relative', boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '4px 16px', borderRadius: '20px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Mais Escolhido
          </div>
          <h2 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>Afiliado Elite</h2>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700 }}>R$ 197</span><span style={{ color: 'var(--text-secondary)' }}>/mês</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, fontSize: '14px' }}>
            <li style={{ marginBottom: '12px', fontWeight: 600 }}>✔️ War Room no WhatsApp</li>
            <li style={{ marginBottom: '12px' }}>✔️ Agente Closer Autônomo</li>
            <li style={{ marginBottom: '12px' }}>✔️ Agentes Creator (Conteúdo e Vídeo)</li>
            <li style={{ marginBottom: '12px' }}>✔️ Agentes Guardian e Publisher</li>
            <li style={{ marginBottom: '12px' }}>✔️ Relatórios e Nurturing Automático</li>
          </ul>
          <Link href={`/dashboard/checkout?plan=elite`}>
            <button className="btn-primary" style={{ width: '100%', marginTop: '24px' }}>Assinar Tier 1</button>
          </Link>
        </div>

        {/* Pro */}
        <div className="glass-panel" style={{ flex: '1 1 280px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Agência Pro</h2>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700 }}>R$ 497</span><span style={{ color: 'var(--text-secondary)' }}>/mês</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, fontSize: '14px', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '12px' }}>✔️ Tudo do Afiliado Elite</li>
            <li style={{ marginBottom: '12px' }}>✔️ Até 5 Produtos / Esteira</li>
            <li style={{ marginBottom: '12px' }}>✔️ 5 War Rooms Simultâneos</li>
            <li style={{ marginBottom: '12px' }}>✔️ Múltiplas instâncias WhatsApp</li>
            <li style={{ marginBottom: '12px' }}>✔️ Suporte Dedicado</li>
          </ul>
          <Link href={`/dashboard/checkout?plan=pro`}>
            <button className="btn-secondary" style={{ width: '100%', marginTop: '24px' }}>Assinar Agência Profissional</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
