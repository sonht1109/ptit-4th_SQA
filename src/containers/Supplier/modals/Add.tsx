import { Button, Form, Input } from 'antd';
import { SProductModal } from 'containers/Product/style';
import React from 'react';

export default function Add() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <SProductModal>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: 'Trường bắt buộc!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="price"
          rules={[{ required: true, message: 'Trường bắt buộc!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input />
        </Form.Item>

        <Form.Item label="Công dụng" name="usageOfProduct">
          <Input />
        </Form.Item>

        <Form.Item label="Cách sử dụng" name="guide">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </SProductModal>
  );
}
