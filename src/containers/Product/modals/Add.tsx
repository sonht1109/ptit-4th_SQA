import { Button, Form, message, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Input from 'antd/lib/input/Input';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { cleanObj } from 'helpers';
import React, { useEffect, useState } from 'react';
import { SProductModal } from '../style';

export default function Add({
  handleSuccess,
  id,
  disabled = false,
}: {
  handleSuccess: () => void;
  id?: number;
  disabled?: boolean;
}) {
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>(null);
  const [form] = useForm();

  useEffect(() => {
    requestToken({ url: API_URL.SUPPLIER.GET_ALL }).then(res => {
      setSuppliers([...res?.data.data]);
    });
  }, []);

  useEffect(() => {
    if (id) {
      requestToken({ url: API_URL.PRODUCT.GET(id) }).then(res => {
        setDetail({ ...res.data?.data });
      });
    }
  }, [id]);

  const onFinish = (values: any) => {
    // const selectedSuppliers = values.suppliers?.map((s: string) =>
    //   s ? JSON.parse(s) : '',
    // );
    // values.suppliers = selectedSuppliers;

    const data = { ...detail, ...cleanObj(values) };

    if (id) {
      requestToken({
        method: 'PUT',
        url: API_URL.PRODUCT.UPDATE(id),
        data,
      })
        .then(res => {
          handleSuccess();
          message.success('Chỉnh sửa mặt hàng thành công');
          form.resetFields();
        })
        .catch(() => {
          message.error('Vui lòng thử lại');
        });
    } else {
      requestToken({
        method: 'POST',
        url: API_URL.PRODUCT.CREATE,
        data: values,
      })
        .then(res => {
          handleSuccess();
          message.success('Thêm mới mặt hàng thành công');
          form.resetFields();
        })
        .catch(() => {
          message.error('Vui lòng thử lại');
        });
    }
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
          rules={[{ required: id ? false : true, message: 'Trường bắt buộc!' }]}
        >
          <Input
            disabled={disabled}
            placeholder={detail?.name || ''}
            value={detail?.name || ''}
          />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: id ? false : true, message: 'Trường bắt buộc!' }]}
        >
          <Input disabled={disabled} placeholder={detail?.price || ''} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input disabled={disabled} placeholder={detail?.description || ''} />
        </Form.Item>

        <Form.Item label="Công dụng" name="usageOfProduct">
          <Input
            disabled={disabled}
            placeholder={detail?.usageOfProduct || ''}
          />
        </Form.Item>

        <Form.Item label="Cách sử dụng" name="guide">
          <Input disabled={disabled} placeholder={detail?.guide || ''} />
        </Form.Item>

        {/* <Form.Item label="Nhà cung cấp" name="suppliers">
          <Select disabled={disabled} mode="multiple">
            {React.Children.toArray(
              suppliers.map((s: any) => (
                <Select.Option value={JSON.stringify(s)}>
                  {s?.name}
                </Select.Option>
              )),
            )}
          </Select>
        </Form.Item> */}

        {!disabled && (
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        )}
      </Form>
    </SProductModal>
  );
}
