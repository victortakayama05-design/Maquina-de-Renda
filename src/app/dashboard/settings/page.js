"use client";

import { useState } from "react";

export default function SettingsVault() {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    openaiKey: "",
    evolutionUrl: "",
    evolutionMasterKey: "",
    warRoomGroupId: "",
    productName: "",
    productLink: "",
    commission: "",
    niche: "",
    reportTime: "20:00",
    reportFrequency: "diario",
    reportDataTypes: "completo",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call to backend provisioner
    try {
      const res = await fetch("/api/provision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      setTimeout(() => {
        setIsSaving(false);
        alert("Configurações salvas! A inteligência artificial está sendo provisionada no seu servidor.");
      }, 1500);

    } catch (error) {
      console.error(error);
      setIsSaving(false);
      alert("Erro ao salvar configurações.");
    }
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Cofre de Configurações</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Preencha suas chaves de API e dados do produto. Nossos agentes usarão essas informações para operar sua estrutura.</p>
      </div>

      <form onSubmit={handleSave}>
        
        {/* API Keys Section */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--primary)' }}>Credenciais Técnicas (APIs)</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Essas chaves são criptografadas e usadas apenas pelos seus agentes.</p>
          
          <div className="form-group">
            <label htmlFor="openaiKey">OpenAI API Key</label>
            <input 
              type="password" 
              id="openaiKey" 
              name="openaiKey" 
              placeholder="sk-proj-..." 
              value={formData.openaiKey}
              onChange={handleChange}
              required 
            />
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="evolutionUrl">Evolution API - URL Base</label>
              <input 
                type="url" 
                id="evolutionUrl" 
                name="evolutionUrl" 
                placeholder="https://sua-api.com" 
                value={formData.evolutionUrl}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="evolutionMasterKey">Evolution API - Master Global Key</label>
              <input 
                type="password" 
                id="evolutionMasterKey" 
                name="evolutionMasterKey" 
                placeholder="ApiKey..." 
                value={formData.evolutionMasterKey}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="warRoomGroupId">War Room - Group JID</label>
            <input 
              type="text" 
              id="warRoomGroupId" 
              name="warRoomGroupId" 
              placeholder="1234567890@g.us" 
              value={formData.warRoomGroupId}
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        {/* Product Configuration Section */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--secondary)' }}>Configuração do Produto & Afiliado</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Esses dados serão usados pelos agentes na criação de conteúdo e vendas.</p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="productName">Nome do Produto</label>
              <input 
                type="text" 
                id="productName" 
                name="productName" 
                placeholder="Ex: Seca Rápido 30D" 
                value={formData.productName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="niche">Nicho</label>
              <input 
                type="text" 
                id="niche" 
                name="niche" 
                placeholder="Ex: Emagrecimento Feminino" 
                value={formData.niche}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 2 }}>
              <label htmlFor="productLink">Link de Vendas (Afiliado)</label>
              <input 
                type="url" 
                id="productLink" 
                name="productLink" 
                placeholder="https://pay.kiwify.com.br/..." 
                value={formData.productLink}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="commission">Comissão (R$)</label>
              <input 
                type="text" 
                id="commission" 
                name="commission" 
                placeholder="Ex: 150,00" 
                value={formData.commission}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
        </div>

        {/* Reporting Configuration Section */}
        <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--success)' }}>Configurações de Relatórios (War Room)</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Defina como e quando você quer receber o resumo das operações dos seus agentes.</p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="reportFrequency">Frequência</label>
              <select 
                id="reportFrequency" 
                name="reportFrequency" 
                value={formData.reportFrequency}
                onChange={handleChange}
                required 
              >
                <option value="diario">Diário</option>
                <option value="semanal">Semanal</option>
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="reportTime">Horário de Disparo (BRT)</label>
              <input 
                type="time" 
                id="reportTime" 
                name="reportTime" 
                value={formData.reportTime}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group" style={{ flex: 2 }}>
              <label htmlFor="reportDataTypes">Tipos de Dados Apresentados</label>
              <select 
                id="reportDataTypes" 
                name="reportDataTypes" 
                value={formData.reportDataTypes}
                onChange={handleChange}
                required 
              >
                <option value="completo">Relatório Completo (Leads + Vendas + objeções)</option>
                <option value="vendas">Apenas Conversões e Vendas Geradas</option>
                <option value="conteudo">Progresso de Criação de Conteúdos</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
          <button type="button" className="btn-secondary">Cancelar</button>
          <button type="submit" className="btn-primary" disabled={isSaving}>
            {isSaving ? "Provisionando Agentes..." : "Salvar & Provisionar Master"}
          </button>
        </div>

      </form>
    </div>
  );
}
