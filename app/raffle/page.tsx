import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import RaffleItemsGrid from '../components/RaffleItemsGrid'

export default async function RafflePage() {
  const session = await getServerSession(authOptions)

  if (session === null) {
    return redirect('/api/auth/signin')
  }

  return <RaffleItemsGrid />
}
