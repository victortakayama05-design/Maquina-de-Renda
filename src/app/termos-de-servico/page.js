import Link from "next/link";
import "../globals.css";

export default function TermosDeServico() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '60px 20px' }}>
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px' }}>
          <h1 className="gradient-text glow-effect" style={{ fontSize: '32px', marginBottom: '8px' }}>Termos de Serviço</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Prestações, Disponibilidade e Assinatura</p>
        </div>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>1. Objeto do Serviço</h2>
          <p style={{ marginBottom: '16px' }}>
            A Máquina de Renda fornece um sistema na nuvem de automação (Software as a Service) focado na integração de APIs de inteligência artificial governadas por fluxos pré-programados para aprimoramento de esteiras orgânicas e vendas em chat (WhatsApp).
          </p>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>2. Conexão BYOK (Bring Your Own Key)</h2>
          <p style={{ marginBottom: '16px' }}>
            Para baratear o custo fixo para os afiliados, operamos no modelo BYOK. Isso significa que o assinante deve gerar e inserir sua própria chave da OpenAI e credenciais de servidor (Evolution API) no seu <strong>Cofre de Configurações</strong>. A Máquina de Renda não se responsabiliza pelos custos de processamento (tokens) gerados pela OpenAI ou custos de hospedagem de WhatsApp externos conectados pelo usuário.
          </p>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>3. Plano Mensal e Cobrança</h2>
          <p style={{ marginBottom: '16px' }}>
            A cobrança (ex: Plano Afiliado Elite) é recorrente e mensal. O atraso na renovação suspenderá automaticamente os serviços de processamento de webhooks e a operação autônoma no WhatsApp será paralisada até a regularização. As transações seguras são gerenciadas via provedor de pagamentos (Stripe).
          </p>
          
          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>4. Disponibilidade (SLA)</h2>
          <p style={{ marginBottom: '16px' }}>
            Trabalhamos para manter o &quot;Cérebro Central&quot; ativo 99.9% do tempo. Eventuais instabilidades nas engrenagens (APIs oficiais da Meta ou OpenAI) fogem ao escopo tecnológico da nossa operação, sendo o suporte nestes casos limitado a instruções de estabilização.
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <Link href="/" className="btn-secondary">Voltar para a Página Inicial</Link>
        </div>
      </div>
    </div>
  );
}
