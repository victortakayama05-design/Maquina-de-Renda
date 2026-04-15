import Link from "next/link";
import "../globals.css";

export default function PoliticaDeReembolso() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '60px 20px' }}>
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px' }}>
          <h1 className="gradient-text glow-effect" style={{ fontSize: '32px', marginBottom: '8px' }}>Política de Reembolso</h1>
          <p style={{ color: 'var(--text-secondary)' }}>A Garantia de Lucro ou Dinheiro de Volta</p>
        </div>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>1. Garantia Incondicional Legal (7 Dias)</h2>
          <p style={{ marginBottom: '16px' }}>
            Em observância ao Código de Defesa do Consumidor, todos os usuários têm o direito de solicitação de cancelamento com estorno integral do valor da assinatura no prazo de 7 (sete) dias corridos após a contratação.
          </p>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>2. Garantia Cega de 30 Dias (ROI Positivo)</h2>
          <p style={{ marginBottom: '16px' }}>
            Nós confiamos no nosso ecossistema de vendas automáticas. Por isso, oferecemos uma garantia estendida e condicionada ao uso real. Se o usuário cumprir os requisitos listados e não atingir um ROI (Retorno sobre Investimento) positivo dentro dos seus primeiros 30 (trinta) dias consecutivos, reembolsaremos o custo total da primeira mensalidade da Máquina de Renda.
          </p>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>3. Requisitos para a Garantia de ROI</h2>
          <p style={{ marginBottom: '16px' }}>Para acionar a Garantia Cega de 30 dias, o usuário deve comprovar:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>
            <li style={{ marginBottom: '8px' }}>Ter conectado as chaves funcionais (OpenAI e Evolution) corretamente no Cofre de Configurações até o 3º dia de assinatura;</li>
            <li style={{ marginBottom: '8px' }}>Não ter tido falha de saldo no provedor da Inteligência Artificial escolhido;</li>
            <li style={{ marginBottom: '8px' }}>Ter mantido o War Room ativo e enviado leads válidos ao contato do Agente Closer;</li>
            <li style={{ marginBottom: '8px' }}>Comprovar, através das plataformas de pagamento parceiras (Hotmart, Kiwify, Eduzz etc.), que o lucro líquido de vendas não superou o preço da mensalidade.</li>
          </ul>
          
          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>4. Processamento</h2>
          <p style={{ marginBottom: '16px' }}>
            As solicitações devem ser enviadas ao nosso suporte via E-mail ou WhatsApp contendo o CPF/CNPJ cadastrado e os prints comprobatórios. Aceitada a solicitação, o estorno na fatura do cartão de crédito ocorrerá entre 5 e 15 dias úteis, conforme as regras da adquirente (Stripe). O cancelamento cortará o acesso imediato aos webhooks operacionais dos agentes.
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <Link href="/" className="btn-secondary">Voltar para a Página Inicial</Link>
        </div>
      </div>
    </div>
  );
}
