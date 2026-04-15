export const metadata = {
  title: 'Máquina de Renda | SaaS',
  description: 'Operação autônoma de afiliados com inteligência artificial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
