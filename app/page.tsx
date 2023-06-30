import Image from 'next/image'
import styles from './page.module.css'
import { db } from './database'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  const { data: session } = useSession()
  const { accessToken } = session || {}
  console.log({ accessToken })
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email || 'undefined session user'} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
