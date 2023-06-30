'use client'

import { signIn } from 'next-auth/react'
import { Button } from 'antd'

export const SigninButton = () => (
  <div>
    <Button onClick={() => signIn('google')}>Sign in with Google</Button>
  </div>
)
