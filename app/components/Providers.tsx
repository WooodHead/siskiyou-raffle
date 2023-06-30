'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { SessionProvider } from 'next-auth/react'

export default function Providers({ children }: React.PropsWithChildren<{}>) {
  return (
    <SessionProvider>
      <StyleProvider hashPriority='high'>{children}</StyleProvider>
    </SessionProvider>
  )
}
