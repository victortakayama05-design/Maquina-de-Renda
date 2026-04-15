import Link from "next/link";
import "../globals.css";

export default function TermosDeUso() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '60px 20px' }}>
      <div className="glass-panel animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px' }}>
          <h1 className="gradient-text glow-effect" style={{ fontSize: '32px', marginBottom: '8px' }}>Termos de Uso</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>1. Aceitação dos Termos</h2>
          <p style={{ marginBottom: '16px' }}>
            Ao acessar e usar a plataforma Máquina de Renda, você concorda em cumprir e ser regido por estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
          </p>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>2. Uso da Plataforma de Inteligência Artificial</h2>
          <p style={{ marginBottom: '16px' }}>
            Nossa plataforma fornece agentes de Inteligência Artificial (Closer, Creator, Nurture, etc.) para a automação de vendas orgânicas de afiliados. O usuário é o único responsável pela legalidade dos produtos promovidos através das chaves de API conectadas à plataforma.
          </p>

          <h2 style={{ color: 'var(--error)', fontSize: '20px', marginTop: '32px', marginBottom: '12px' }}>3. Cancelamento por Descumprimento de Regras</h2>
          <p style={{ marginBottom: '16px' }}>
            A Máquina de Renda reserva-se o direito de <strong>suspender ou cancelar sumariamente a conta do usuário</strong>, sem direito a reembolso ou aviso prévio, caso seja identificado o uso da plataforma para as seguintes finalidades restritas:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>
            <li style={{ marginBottom: '8px' }}>Promoção de produtos ilegais, fraudes, esquemas de pirâmide ou atividades criminosas;</li>
            <li style={{ marginBottom: '8px' }}>Geração de spam em massa não autorizado que viole as políticas da Meta Inc. (WhatsApp);</li>
            <li style={{ marginBottom: '8px' }}>Tentativas de engenharia reversa, ataques DDoS ou comprometimento dos servidores da plataforma;</li>
            <li style={{ marginBottom: '8px' }}>Uso de linguagem discriminatória, violenta ou explícita configurada manualmente nos fluxos de automação.</li>
          </ul>

          <h2 style={{ color: 'var(--text-primary)', fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>4. Propriedade Intelectual</h2>
          <p style={{ marginBottom: '16px' }}>
            Todo o fluxo de automação (workflows), design da plataforma e os prompts base que compõem o "Cérebro Central" são propriedade exclusiva da Máquina de Renda. A assinatura concede acesso de uso como serviço (SaaS), e de forma alguma transfere a propriedade do código-fonte ou workflows.
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
          <Link href="/" className="btn-secondary">Voltar para a Página Inicial</Link>
        </div>
      </div>
    </div>
  );
}
