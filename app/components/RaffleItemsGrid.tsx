'use client'

import { Row } from 'antd'
import { AdminCard, RaffleItem } from './RaffleItem'
import { useState } from 'react'

export interface IRaffleItem {
  id: number
  title: string
  description: string
  imageUrl: string
  tickets: string[]
}

const IMAGE = {
  width: 200,
  height: 150,
}

const MOCK_ITEMS: IRaffleItem[] = [
  {
    id: 1,
    title: 'Item 1',
    description: 'This is item 1',
    imageUrl: `https://picsum.photos/${IMAGE.width}/${IMAGE.height}`,
    tickets: ['some@user.com', 'another@user.com'],
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'This is item 2',
    imageUrl: `https://picsum.photos/${IMAGE.width}/${IMAGE.height}`,
    tickets: ['some@user.com'],
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'This is item 3',
    imageUrl: `https://picsum.photos/${IMAGE.width}/${IMAGE.height}`,
    tickets: [],
  },
]

export default function RaffleItemsGrid() {
  const isAdmin = true
  return (
    <>
      <Row
        justify='space-evenly'
        style={{
          margin: '1rem',
        }}
      >
        {MOCK_ITEMS.map((item) => (
          <RaffleItem
            key={item.id}
            {...item}
          />
        ))}
        {isAdmin && (
          <AdminCard />
        )}
      </Row>
    </>
  )
}
