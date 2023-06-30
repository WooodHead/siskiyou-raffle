'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from 'antd'
import { useState } from 'react'
import { ErrorAlert } from './Alerts'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const LogInButton = ({ status }: any) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setLoading(true)
    const res = await signIn('google', { callbackUrl: '/raffle' })

    if (res?.ok) {
      setError('')
      setLoading(false)
      return
    }

    if (res?.error) {
      console.error(res.error)
      setError(res.error)
      setLoading(false)
      return
    }
  }

  return (
    <div>
      <Button
        size='large'
        type='primary'
        loading={loading}
        onClick={handleSignIn}
      >
        Sign in with Google
      </Button>
      <ErrorAlert description={error} />
    </div>
  )
}

const LogOutButton = () => {
  const [loading, setLoading] = useState(false)
  const handleLogOut = () => {
    setLoading(true)
    signOut()
  }
  return (
    <div>
      <Button size='large' loading={loading} onClick={handleLogOut}>
        Sign out
      </Button>
    </div>
  )
}

const AuthenticatedButtons = () => {
  const pathname = usePathname()
  const linkToUse = pathname === '/raffle' ? '/' : '/raffle'

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Link href={linkToUse}>
        <Button size='large' type='primary'>
          {linkToUse === '/' ? 'Home' : 'Raffle'}
        </Button>
      </Link>
      <LogOutButton />
    </div>
  )
}

export default function HeaderButtons() {
  const { status } = useSession()
  return status === 'authenticated' ? <AuthenticatedButtons /> : <LogInButton />
}
