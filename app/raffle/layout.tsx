import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Unauthorized from '@/app/components/Unauthorized'

export default async function RaffleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  const isLoggedIn = !!session?.user
  if (!isLoggedIn) {
    return <Unauthorized />
  }

  return <>{children}</>
}
