import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Flexxible',
  description: 'Showcase and Add your remarkable Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </html>
  )
}
