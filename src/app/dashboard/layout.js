"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "../globals.css";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [profile, setProfile] = useState({ planTier: 'free', subscriptionStatus: 'none' });

  useEffect(() => {
    fetch('/api/profile')
      .then(r => r.json())
      .then(data => {
        if(data && data.planTier) {
          setProfile(data);
        }
      })
      .catch(console.error);
  }, []);

  const navItems = [
    { name: "Painel de Agentes", path: "/dashboard" },
    { name: "Cofre de Configurações", path: "/dashboard/settings" },
    { name: "Perfil do Usuário", path: "/dashboard/profile" },
    { name: "Cobrança", path: "/dashboard/billing" },
  ];

  const planNames = {
    free: 'Plano Grátis',
    starter: 'Starter Vendas',
    elite: 'Afiliado Elite',
    pro: 'Agência Pro'
  };

  const isActiveSub = profile.subscriptionStatus === 'active';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sidebar */}
      <aside className="glass-panel" style={{ 
        width: '280px', 
        borderRadius: '0 16px 16px 0', 
        borderLeft: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
        zIndex: 10
      }}>
        <div style={{ padding: '0 24px', marginBottom: '40px' }}>
          <h2 className="gradient-text glow-effect" style={{ fontSize: '20px', margin: 0 }}>Máquina de Renda</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Operado por IA</p>
        </div>

        <nav style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} style={{ marginBottom: '8px', padding: '0 16px' }}>
                  <Link href={item.path} 
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      color: isActive ? 'white' : 'var(--text-secondary)',
                      background: isActive ? 'linear-gradient(90deg, rgba(99, 102, 241, 0.2), transparent)' : 'transparent',
                      borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.2s ease'
                    }}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ padding: '0 24px' }}>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
              {planNames[profile.planTier] || 'Plano Grátis'}
            </p>
            <p style={{ margin: 0, fontSize: '12px', color: isActiveSub ? 'var(--success)' : 'var(--text-secondary)' }}>
              {isActiveSub ? 'Ativo' : 'Grátis Limitado'}
            </p>
            <Link href="/dashboard/plans">
              <button className="btn-secondary" style={{ width: '100%', marginTop: '12px', padding: '8px', fontSize: '12px' }}>Ver Planos</button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
