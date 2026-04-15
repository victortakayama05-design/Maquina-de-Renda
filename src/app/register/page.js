"use client";

import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    docType: "cpf",
    document: "",
    companyName: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating registration
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px',
      background: 'radial-gradient(circle at 50% -20%, #1c1b33, #0f1115 60%)'
    }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '40px', maxWidth: '480px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 className="gradient-text glow-effect" style={{ fontSize: '28px', marginBottom: '8px' }}>
            Criar sua Conta
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Configure seu ambiente de afiliação automatizado.
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" id="name" name="name"
              value={formData.name} onChange={handleChange}
              placeholder="Digite seu nome" required 
            />
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Tipo de Conta</label>
              <select name="docType" value={formData.docType} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', background: 'rgba(15, 17, 21, 0.6)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: 'var(--text-primary)' }}>
                <option value="cpf">Pessoa Física (CPF)</option>
                <option value="cnpj">Pessoa Jurídica (CNPJ)</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="document" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {formData.docType === 'cpf' ? "CPF" : "CNPJ"}
              </label>
              <input 
                type="text" id="document" name="document"
                value={formData.document} onChange={handleChange}
                placeholder={formData.docType === 'cpf' ? "000.000.000-00" : "00.000.000/0001-00"} 
                required 
              />
            </div>
          </div>

          {formData.docType === 'cnpj' && (
            <div className="form-group">
              <label htmlFor="companyName">Nome da Empresa (Razão Social)</label>
              <input 
                type="text" id="companyName" name="companyName"
                value={formData.companyName} onChange={handleChange}
                placeholder="Empresa Empreendimentos LTDA" 
                required 
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" id="email" name="email" 
              value={formData.email} onChange={handleChange}
              placeholder="afiliado@vendas.com" required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Criar Senha</label>
            <input 
              type="password" id="password" name="password"
              value={formData.password} onChange={handleChange}
              placeholder="••••••••" required 
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }} disabled={isLoading}>
            {isLoading ? "Criando ambiente..." : "Começar Agora"}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Já possui uma Máquina de Renda? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Fazer login</Link>
        </div>
      </div>
      
      <div style={{ position: 'absolute', top: '10%', right: '20%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '250px', height: '250px', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: 0 }}></div>
    </div>
  );
}
