"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false);
  
  // Simulated initial user data
  const [formData, setFormData] = useState({
    name: "Victor Takayama",
    phone: "+55 (11) 99999-9999",
    company: "Takayama Advisory",
    email: "afiliado@vendas.com", // Simulated from login/db
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate updating Supabase profile
    setTimeout(() => {
      setIsSaving(false);
      alert("Perfil atualizado com sucesso!");
    }, 1000);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Perfil do Usuário</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Gerencie suas informações pessoais e credenciais de acesso à plataforma.</p>
      </div>

      <form onSubmit={handleSave}>
        
        {/* Basic Info Section - Editable */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-primary)' }}>Informações Pessoais</h2>
          
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="phone">Telefone / WhatsApp</label>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="company">Nome do Projeto / Empresa</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Security Section - Read Only */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px', borderLeft: '4px solid var(--error)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--error)' }}>Segurança e Acesso</h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Por motivos de segurança, a alteração de e-mail e senha só pode ser feita solicitando ao suporte técnico via WhatsApp.
              </p>
            </div>
            <button type="button" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '12px' }}>Chamar Suporte</button>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-mail Cadastrado</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              disabled
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
              title="Solicite ao suporte para alterar"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha de Acesso</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value="********"
              disabled
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
              title="Solicite ao suporte para alterar"
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
          <button type="submit" className="btn-primary" disabled={isSaving}>
            {isSaving ? "Atualizando..." : "Salvar Alterações"}
          </button>
        </div>

      </form>
    </div>
  );
}
