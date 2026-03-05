import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORBIT tec',
  description: 'Autonomous AI systems',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
