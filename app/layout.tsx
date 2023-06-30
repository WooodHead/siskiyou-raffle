import '../public/antd.min.css'
import './globals.css'

import AntdProvider from '@/app/components/AntdProvider'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Siskiyou Raffle',
  description: 'Siskiyou Raffle',
}

const layoutStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `,
}

const MainContent = ({ children }: React.PropsWithChildren) => (
  <div style={{ gridArea: 'main' }}>{children}</div>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AntdProvider>
          <div style={layoutStyle}>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
          </div>
        </AntdProvider>
      </body>
    </html>
  )
}
