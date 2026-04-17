"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function DashboardHome() {
  const [profile, setProfile] = useState({ planTier: 'free', subscriptionStatus: 'none' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/profile')
      .then(r => r.json())
      .then(data => {
        if(data && data.planTier) {
          setProfile(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const stats = {
    leads: 124,
    vendas: "R$ 4.590",
    conversao: "3.2%",
    status: "Operando",
  };

  const agents = [
    { id: 'closer', name: "🔥 Closer", desc: "Vendas 24/7", status: "online", lastAction: "2 min atrás", requiredPlan: 'free' },
    { id: 'creator', name: "✍️ Creator", desc: "Scripts Reels", status: "online", lastAction: "Hoje, 05:30", requiredPlan: 'elite' },
    { id: 'video', name: "🎬 Video Avatar", desc: "Produção HeyGen", status: "waiting", lastAction: "Agendado 18:00", requiredPlan: 'elite' },
    { id: 'guardian', name: "🛡️ Guardian", desc: "Compliance", status: "online", lastAction: "15 min atrás", requiredPlan: 'elite' },
    { id: 'publisher', name: "📤 Publisher", desc: "Postagem Redes", status: "online", lastAction: "Hoje, 14:00", requiredPlan: 'elite' },
    { id: 'hunter', name: "🎯 Hunter", desc: "Captura Leads", status: "online", lastAction: "Agora", requiredPlan: 'elite' },
    { id: 'nurture', name: "💬 Nurture", desc: "Reativação Frios", status: "waiting", lastAction: "Aguardando 10:30", requiredPlan: 'elite' },
    { id: 'analyst', name: "📊 Analyst", desc: "Métricas", status: "waiting", lastAction: "Agendado 21:00", requiredPlan: 'elite' },
  ];

  const planHierachy = {
    'free': 0,
    'starter': 1,
    'elite': 2,
    'pro': 3
  };

  const currentLevel = planHierachy[profile.planTier] || 0;

  const planNames = {
    free: 'Plano Grátis',
    starter: 'Starter Vendas',
    elite: 'Afiliado Elite',
    pro: 'Agência Pro'
  };

  if (loading) {
    return <div className="animate-fade-in" style={{ padding: '40px', color: 'var(--text-secondary)' }}>Carregando central de operações...</div>;
  }

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Painel Central de Agentes</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Visão geral da sua operação &quot;Máquina de Renda&quot;</p>
        </div>
        <div style={{ padding: '8px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: '20px', color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></div>
          War Room Ativo
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
        {[
          { label: "Leads Capturados (7d)", value: stats.leads },
          { label: "Receita Estimada", value: stats.vendas, color: "var(--primary)" },
          { label: "Taxa de Conversão", value: stats.conversao },
        ].map((kpi, idx) => (
          <div key={idx} className="glass-panel" style={{ flex: 1, padding: '24px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px', fontWeight: 500 }}>{kpi.label}</p>
            <h2 style={{ fontSize: '32px', color: kpi.color || 'var(--text-primary)' }}>{kpi.value}</h2>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px' }}>Equipe de Agentes ({planNames[profile.planTier]})</h2>
        {currentLevel < 2 && (
          <Link href="/dashboard/plans">
            <button className="btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Liberar Todos os Agentes</button>
          </Link>
        )}
      </div>
      
      {/* Agents Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {agents.map((agent, index) => {
          const isLocked = planHierachy[agent.requiredPlan] > currentLevel;
          const agentStatus = isLocked ? 'locked' : agent.status;

          return (
            <div key={index} className="glass-panel" style={{ 
              padding: '20px', 
              transition: 'transform 0.2s ease',
              opacity: isLocked ? 0.5 : 1,
              filter: isLocked ? 'grayscale(100%)' : 'none'
            }} 
              onMouseOver={(e) => { if(!isLocked) e.currentTarget.style.transform = 'translateY(-4px)' }} 
              onMouseOut={(e) => { if(!isLocked) e.currentTarget.style.transform = 'translateY(0)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{agent.name} {isLocked && '🔒'}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{agent.desc}</p>
                </div>
                <div style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  background: agentStatus === 'online' ? 'var(--success)' : (agentStatus === 'locked' ? 'var(--error)' : 'var(--text-secondary)'),
                  boxShadow: agentStatus === 'online' ? '0 0 10px var(--success)' : 'none'
                }}></div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '16px', marginTop: '16px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{isLocked ? 'Requer upgrade:' : 'Última ação:'}</span>
                <span style={{ fontSize: '12px', fontWeight: 500, color: isLocked ? 'var(--primary)' : 'inherit' }}>
                  {isLocked ? `Plano ${planNames[agent.requiredPlan]}` : agent.lastAction}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
