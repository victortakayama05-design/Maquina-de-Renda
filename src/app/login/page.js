"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating login
    setTimeout(() => {
      // route to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'radial-gradient(circle at 50% -20%, #1c1b33, #0f1115 60%)'
    }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '40px', maxWidth: '420px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 className="gradient-text glow-effect" style={{ fontSize: '28px', marginBottom: '8px' }}>
            Acesso à Plataforma
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Entre na sua Máquina de Renda
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="afiliado@vendas.com" 
              required 
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label htmlFor="password" style={{ marginBottom: 0 }}>Senha</label>
              <Link href="/recover" style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 500 }}>Esqueceu a senha?</Link>
            </div>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '16px' }}
            disabled={isLoading}
          >
            {isLoading ? "Autenticando..." : "Entrar"}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Ainda não tem conta? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 500 }}>Criar minha operação</Link>
        </div>
      </div>
      
      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px',
        background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%', zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '20%', width: '250px', height: '250px',
        background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: 0
      }}></div>
    </div>
  );
}
