'use client'

import { signIn } from 'next-auth/react'
import Button from '@nextui-org/react/button'
export const SigninButton = () => (
  <Button onClick={() => signIn('google')}>Sign in with Google</Button>
)
