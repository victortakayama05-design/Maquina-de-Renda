'use client';

import { useState, useEffect, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planKey = searchParams.get('plan') || 'elite';
  
  const [clientSecret, setClientSecret] = useState("");
  const [loadingMsg, setLoadingMsg] = useState("Preparando túnel seguro...");

  // Determine plane names and prices for UI
  const planDetails = {
    starter: { name: 'Starter Vendas', price: 'R$ 97,00' },
    elite: { name: 'Afiliado Elite', price: 'R$ 197,00' },
    pro: { name: 'Agência Pro', price: 'R$ 497,00' },
  };
  const currentPlan = planDetails[planKey] || planDetails['elite'];

  useEffect(() => {
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: planKey })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setLoadingMsg(data.error || "Erro ao ligar gateway.");
        }
      })
      .catch((err) => {
        setLoadingMsg("Erro de conexão com o banco de dados.");
        console.error(err);
      });
  }, [planKey]);

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#10b981',
      colorBackground: '#0f1115',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', minHeight: '80vh' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#ffffff' }}>
          Checkout <span style={{ color: 'var(--primary)' }}>Máquina de Renda</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Complete seu pagamento com segurança sem sair da plataforma. Processado por Stripe.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '900px' }}>
        
        {/* Formulário de Pagamento (Esquerda) */}
        <div className="glass-panel" style={{ flex: '1 1 500px', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px' }}>Dados do Pagamento</h2>
            {/* Removed the 'Powered by Stripe' text per user request */}
          </div>

          {!clientSecret ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: loadingMsg.includes('Erro') ? 'var(--error)' : 'var(--text-secondary)' }}>
              {loadingMsg}
            </div>
          ) : (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm buttonText={`PAGAR ${currentPlan.price}`} />
            </Elements>
          )}
        </div>

        {/* Resumo (Direita) */}
        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '32px', height: 'fit-content' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Sua Solicitação</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Serviço</span>
            <span style={{ fontWeight: 600 }}>{currentPlan.name}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
            <span style={{ fontWeight: 700, fontSize: '18px' }}>Total</span>
            <span style={{ fontWeight: 700, fontSize: '24px', color: 'var(--primary)' }}>{currentPlan.price}</span>
          </div>

          <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              🔒 Ambiente seguro via Stripe. Sua assinatura será renovada automaticamente conforme o plano selecionado.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CustomCheckout() {
  return (
    <Suspense fallback={<div>Carregando checkout seguro...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
