
// import { useSession, signIn, signOut } from 'next-auth/react'

// function LoginButton() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session?.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

// export default function HomePage() {
//   return <div>
//     <h1>Fuck off</h1>
//     <LoginButton />
//   </div>
// }

import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { SigninButton } from './Buttons'

export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SigninButton />
    </div>
  )
}
