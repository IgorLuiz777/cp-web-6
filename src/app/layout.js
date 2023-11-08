
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Loja',
  description: 'Loja de Produtos GEEK - Checkpoint 6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
