import React from 'react'
import { Alert } from 'antd'

export function ErrorAlert({ description }: { description: string }) {
  if (!description) return <></>
  return (
    <div
      style={{
        display: 'fixed',
        margin: '1.5rem',
        top: 0,
        right: 0,
        zIndex: 1,
        minWidth: '200px',
        minHeight: '50px',
      }}
    >
      <Alert
        showIcon
        closable
        message='Error'
        description={description}
        type='error'
      />
    </div>
  )
}
