import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SiskiyouLogo from '@/app/components/SiskiyouLogo'
import HeaderButtons from '@/app/components/HeaderButtons'

export default async function Header() {
  const data = await getServerSession(authOptions)
  const isLoggedIn = !!data?.user
  return (
    <header
      style={{
        gridArea: 'header',
        padding: '1rem',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <SiskiyouLogo />
      <HeaderButtons isLoggedIn={isLoggedIn} />
    </header>
  )
}
