import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Panda News',
  description: 'react-redux learning project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
