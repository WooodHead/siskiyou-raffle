'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from 'antd'
import { useState } from 'react'
import { ErrorAlert } from './Alerts'

const LogInButton = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setLoading(true)
    const res = await signIn('google', { callbackUrl: '/' })
    if (res?.error) {
      console.error(res.error)
      setLoading(false)
      setError(res.error)
      return
    }

    if (res?.ok) {
      setLoading(false)
      setError('')
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
  const handleSignOut = () => {
    setLoading(true)
    signOut({ callbackUrl: '/' })
  }
  return (
    <div>
      <Button size='large' loading={loading} onClick={handleSignOut}>
        Sign out
      </Button>
    </div>
  )
}

export default function HeaderButtons({ isLoggedIn }: { isLoggedIn: boolean }) {
  return isLoggedIn ? <LogOutButton /> : <LogInButton />
}
