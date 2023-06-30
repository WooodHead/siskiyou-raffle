'use client'

import { signIn } from 'next-auth/react'

export const SigninButton = () => (
  <button onClick={() => signIn('google')}>Sign in with Google</button>
)
