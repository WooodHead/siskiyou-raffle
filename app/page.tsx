import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { SigninButton } from './components/Buttons'

export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SigninButton />
    </div>
  )
}
