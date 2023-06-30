import React, { useState } from 'react'
import { Button, Form, Input, Switch, Modal, FormInstance } from 'antd'

export const AdminAddForm = ({
  loading,
  form,
}: {
  loading: boolean
  form: FormInstance
}) => {
  return (
    <Form form={form} layout='vertical' disabled={loading}>
      <Form.Item label='Show Item' valuePropName='show'>
        <Switch />
      </Form.Item>
      <Form.Item label='Name'>
        <Input placeholder='Name of the item' />
      </Form.Item>
      <Form.Item label='Description'>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name='url'
        label='URL'
        rules={[
          { required: true },
          { type: 'url', warningOnly: true },
          { type: 'string', min: 6 },
        ]}
      >
        <Input placeholder='Image URL' />
      </Form.Item>
    </Form>
  )
}
export const AdminAddModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean
  setModalOpen: (open: boolean) => void
}) => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setModalOpen(false)
      setLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  return (
    <Modal
      title='Add Item'
      open={modalOpen}
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
    >
      <AdminAddForm loading={loading} form={form} />
    </Modal>
  )
}
