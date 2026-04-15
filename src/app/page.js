"use client";

import Link from "next/link";
import "./globals.css";

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Navbar */}
      <nav className="glass-panel" style={{
        position: 'fixed',
        top: 0, width: '100%', zIndex: 50,
        padding: '16px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none'
      }}>
        <div className="gradient-text glow-effect" style={{ fontSize: '20px', fontWeight: 700 }}>
          Máquina de Renda
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/login" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
            Acessar Conta
          </Link>
          <Link href="/register" className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
            Quero Minha Máquina
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        position: 'relative',
        padding: '160px 20px 100px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Blobs */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.15, borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '350px', height: '350px', background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: 0 }}></div>
        
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '20px', color: 'var(--primary)', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            🟢 SaaS 100% Operado por Inteligência Artificial
          </div>
          <h1 style={{ fontSize: '56px', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.03em' }}>
            Dê adeus ao operacional.<br /> 
            Sua <span className="gradient-text">Máquina de Vendas</span> 24/7.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
            Pare de perder horas produzindo conteúdo e atendendo leads manualmente. Nossa plataforma provisiona uma verdadeira <strong>equipe de 8 especialistas em IA</strong> diretamente no seu WhatsApp para gerar e fechar vendas no automático.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/register" className="btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Começar Agora
            </Link>
            <Link href="#planos" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Ver Planos
            </Link>
          </div>
        </div>
      </header>

      {/* Benefits / How It Works Section */}
      <section style={{ padding: '80px 20px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>
            Por que ser um Afiliado Comum se você pode ser <span className="gradient-text glow-effect" style={{ fontWeight: 800 }}>Elite</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 60px' }}>
            Nós transformamos a forma de vender na internet. Entregar seu link de afiliado e esperar a comissão cair parou de funcionar. Agora a inteligência artificial trabalha por você em cada etapa do funil.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', textAlign: 'left' }}>
            <div className="glass-panel feature-card" style={{ padding: '32px', borderTop: '4px solid var(--success)' }}>
              <div style={{ marginBottom: '24px', color: 'var(--success)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" className="neon-icon" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Atendimento Humanizado 24/7</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>O Agente Closer conversa no WhatsApp com cada lead de forma personalizada, quebrando objeções e enviando seu link com rastreio de vendas de madrugada, finais de semana e feriados.</p>
            </div>
            
            <div className="glass-panel feature-card" style={{ padding: '32px', borderTop: '4px solid var(--primary)' }}>
              <div style={{ marginBottom: '24px', color: 'var(--primary)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" className="neon-icon" stroke="currentColor">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Geração de Conteúdo Infinita</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Sem tempo para criar vídeos? Os Agentes Creator analisam a página de vendas do produto que você escolheu e redigem os scripts mais persuasivos possíveis para TikTok e Reels virais.</p>
            </div>
            
            <div className="glass-panel feature-card" style={{ padding: '32px', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ marginBottom: '24px', color: 'var(--secondary)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" className="neon-icon" stroke="currentColor">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c-2.28 0-3-4.5-3-4.5s-2 1.34-2 3c0 2 1.5 4 2.5 4"></path>
                  <path d="M12 22a7.5 7.5 0 0 0 7.5-7.5c0-4.14-3.36-7.5-7.5-12.5-4.14 5-7.5 8.36-7.5 12.5A7.5 7.5 0 0 0 12 22"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Retenção e Metas (Nurturing)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>O lead visualizou o checkout mas não comprou? O Agente Nurture reativa esse contato no dia seguinte aplicando gatilhos mentais de escassez sem que você precise abrir o celular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Guarantee Section */}
      <section style={{ padding: '60px 20px', position: 'relative', zIndex: 10 }}>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', textAlign: 'center', border: '1px solid var(--primary)', background: 'rgba(99, 102, 241, 0.05)' }}>
          <div style={{ width: '64px', height: '64px', margin: '0 auto 24px', color: 'var(--primary)' }}>
            <svg viewBox="0 0 24 24" className="neon-icon" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8l4 4-4 4M8 12h8"></path>
            </svg>
          </div>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Garantia Cega de <span className="gradient-text">30 Dias (ROI)</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Nós confiamos tanto na inteligência artificial da nossa máquina que o trato é simples: use a plataforma por 30 dias integrais. Se a automação não te trouxer um Retorno Sobre o Investimento (ROI) positivo no primeiro mês, nós reembolsamos 100% da sua mensalidade.
          </p>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Sem burocracia. Sem entrelinhas. Só lucro ou dinheiro na mão.</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" style={{ padding: '80px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Planos de Assinatura</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Selecione o melhor combustível para sua máquina.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Plan 1 */}
          <div className="glass-panel" style={{ flex: '1 1 300px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Starter Vendas</h3>
            <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px' }}>
              R$ 97<span style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>/mês</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1, color: 'var(--text-secondary)', lineHeight: 2 }}>
              <li>✔️ Agente Closer (Vendas) 24/7</li>
              <li>✔️ Setup de Produto Rápido</li>
              <li>✔️ Painel de Leads básico</li>
              <li>❌ Criação de Conteúdo (Reels)</li>
              <li>❌ Gestão de Redes Sociais</li>
            </ul>
            <Link href="/register?plan=starter" className="btn-secondary" style={{ textAlign: 'center' }}>Assinar Starter</Link>
          </div>

          {/* Plan 2 - Highlighted */}
          <div className="glass-panel glow-effect" style={{ flex: '1 1 300px', padding: '40px', display: 'flex', flexDirection: 'column', border: '1px solid var(--primary)', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>MAIS ESCOLHIDO</div>
            <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '8px' }}>Afiliado Elite</h3>
            <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px' }}>
              R$ 197<span style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>/mês</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1, color: 'var(--text-primary)', lineHeight: 2 }}>
              <li>✔️ <strong>War Room no WhatsApp</strong></li>
              <li>✔️ Agente Closer Autônomo</li>
              <li>✔️ Agentes Creator (Conteúdo e Vídeo)</li>
              <li>✔️ Agentes Guardian e Publisher</li>
              <li>✔️ Relatórios e Nurturing Automático</li>
            </ul>
            <Link href="/register?plan=tier1" className="btn-primary" style={{ textAlign: 'center' }}>Assinar Tier 1</Link>
          </div>

          {/* Plan 3 */}
          <div className="glass-panel" style={{ flex: '1 1 300px', padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Agência Pro</h3>
            <div style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px' }}>
              R$ 497<span style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>/mês</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1, color: 'var(--text-secondary)', lineHeight: 2 }}>
              <li>✔️ Tudo do Afiliado Elite</li>
              <li>✔️ Até 5 Produtos / Esteira</li>
              <li>✔️ 5 War Rooms Simultâneos</li>
              <li>✔️ Múltiplas instâncias WhatsApp</li>
              <li>✔️ Suporte Dedicado</li>
            </ul>
            <Link href="/register?plan=agency" className="btn-secondary" style={{ textAlign: 'center' }}>Assinar Agência Profissional</Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px 40px', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '40px', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <Link href="/termos-de-uso" style={{ transition: 'color 0.2s', ':hover': { color: 'var(--primary)' } }}>Termos de Uso</Link>
          <Link href="/termos-de-servico" style={{ transition: 'color 0.2s' }}>Termos de Serviço</Link>
          <Link href="/politica-de-reembolso" style={{ transition: 'color 0.2s' }}>Política de Reembolso</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Máquina de Renda. Todos os direitos reservados para TG Holding.</p>
      </footer>
    </div>
  );
}
