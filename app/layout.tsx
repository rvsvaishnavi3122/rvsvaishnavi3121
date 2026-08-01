import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaishnavi - Product Manager',
  description: 'QA Engineer → Associate Product Manager. Building products that solve meaningful problems.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Vaishnavi - Product Manager',
    description: 'Building products that solve meaningful problems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-primary font-inter">
        {children}
      </body>
    </html>
  )
}
