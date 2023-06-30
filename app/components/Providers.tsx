'use client'

import { StyleProvider } from '@ant-design/cssinjs'

export default function Providers({ children }: React.PropsWithChildren<{}>) {
  return (
    <StyleProvider hashPriority='high'>
      {children}
    </StyleProvider>
  )
}
