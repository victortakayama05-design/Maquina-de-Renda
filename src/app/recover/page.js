"use client";

import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function RecoverPassword() {
  const [formData, setFormData] = useState({ email: "", document: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecover = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending recovery to support webhook
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: 'radial-gradient(circle at 50% -20%, #1c1b33, #0f1115 60%)' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '40px', maxWidth: '420px', width: '100%', position: 'relative', zIndex: 10 }}>
        
        {isSent ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--success)' }}>
              ✔️
            </div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Solicitação Enviada!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
              Por segurança, a redefinição da sua senha será avaliada pela nossa equipe. Entraremos em contato no WhatsApp e E-mail cadastrados neste documento.
            </p>
            <Link href="/login" className="btn-secondary" style={{ display: 'block', textAlign: 'center' }}>Voltar para o Login</Link>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h1 className="gradient-text glow-effect" style={{ fontSize: '24px', marginBottom: '8px' }}>
                Recuperação Segura
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Para proteger suas comissões e chaves API, envie seus dados de verificação.
              </p>
            </div>

            <form onSubmit={handleRecover}>
              <div className="form-group">
                <label htmlFor="document">CPF ou CNPJ (apenas números)</label>
                <input 
                  type="text" id="document" value={formData.document}
                  onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                  placeholder="00011122233" required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail Cadastrado</label>
                <input 
                  type="email" id="email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="afiliado@vendas.com" required 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }} disabled={isLoading}>
                {isLoading ? "Validando dados..." : "Solicitar Redefinição via Suporte"}
              </button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              Lembrou sua senha? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Voltar ao login</Link>
            </div>
          </>
        )}
      </div>
      
      <div style={{ position: 'absolute', top: '20%', right: '20%', width: '300px', height: '300px', background: 'var(--error)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: 0 }}></div>
    </div>
  );
}
