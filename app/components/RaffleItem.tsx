import React, { useState } from 'react'
import { Button, Card, Col, Typography } from 'antd'
import { IRaffleItem } from './RaffleItemsGrid'
import {
  DeleteFilled,
  EditFilled,
  MinusCircleFilled,
  PlusCircleFilled,
  PlusOutlined,
} from '@ant-design/icons'
import { AdminEditModal } from './AdminEditModal'
import { AdminAddModal } from './AdminAddModal'

const { Meta } = Card

const ICON_SIZE = 20

const iconStyle = {
  fontSize: ICON_SIZE,
}

const buttonStyle = {}

const AdminActions = (item: IRaffleItem) => {
  const { id } = item
  const [modalOpen, setModalOpen] = useState(false)
  const handleDelete = () => {
    console.log('delete')
  }
  return (
    <>
      <AdminEditModal open={modalOpen} setOpen={setModalOpen} item={item} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem',
          margin: '0.5rem 0',
          border: '1px solid #e8e8e8',
          borderRadius: '5px',
        }}
      >
        <Button
          type='primary'
          style={buttonStyle}
          icon={
            <EditFilled
              key='edit'
              onClick={() => setModalOpen(true)}
              style={iconStyle}
            />
          }
        >
          Admin Edit
        </Button>
        <Button
          type='default'
          danger
          style={buttonStyle}
          icon={
            <DeleteFilled
              style={{ ...iconStyle, color: 'red' }}
              onClick={handleDelete}
              key='delete'
            />
          }
        >
          Admin Remove
        </Button>
      </div>
    </>
  )
}

export const AdminCard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleAddItem = () => {
    setModalOpen(true)
  }
  return (
    <>
      <AdminAddModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Col xs={2} sm={2} md={3} lg={4} xl={5}>
        <Card
          onClick={handleAddItem}
          hoverable
          style={{
            minWidth: 240,
            maxWidth: 340,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            border: '1px dashed #e8eeee',
            background: 'rgba(0, 0,0,0.04)',
          }}
        >
          <Typography.Title level={3}>
            <PlusOutlined
              style={{
                fontSize: 40,
                color: 'rgba(0, 0, 0, 0.45)',
              }}
            />
          </Typography.Title>
        </Card>
      </Col>
    </>
  )
}

export const RaffleItem = (item: IRaffleItem) => {
  const { title, description, imageUrl, tickets } = item
  const handleAdd = () => {}
  const handleSubtract = () => {}
  const isAdmin = true
  return (
    <Col xs={2} sm={2} md={3} lg={4} xl={5}>
      <Card
        hoverable
        actions={[
          <PlusCircleFilled key='add' onClick={handleAdd} style={iconStyle} />,
          <MinusCircleFilled
            key='remove'
            onClick={handleSubtract}
            style={iconStyle}
          />,
        ]}
        cover={<img alt='raffle image' src={imageUrl} />}
      >
        <Typography.Title level={5}>
          Tickets submitted: {tickets.length || 0}
        </Typography.Title>
        <Typography.Title level={3}>{title}</Typography.Title>
        <Meta description={description} />
      </Card>
      {isAdmin && <AdminActions {...item} />}
    </Col>
  )
}
