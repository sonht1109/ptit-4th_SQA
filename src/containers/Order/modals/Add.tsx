import {
  Button,
  Col,
  Form,
  InputNumber,
  List,
  message,
  Row,
  Select,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { SProductModal } from 'containers/Product/style';
import React, { useEffect, useState } from 'react';

export default function Add({ handleSuccess }: { handleSuccess?: () => void }) {
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [form] = useForm();

  const onFinish = (values: any) => {
    const supplierId = JSON.parse(values.supplier).id;
    if (selectedProducts.length === 0) {
      message.error('Chưa có sản phẩm nào được thêm');
    } else {
      requestToken({
        method: 'POST',
        url: API_URL.ORDER.CREATE,
        data: {
          listProduct: selectedProducts.map((s: any) => ({
            product: {
              id: s.product.id,
            },
            quantity: s.quantity,
          })),
          supplier: {
            id: supplierId,
          },
        },
      })
        .then(() => {
          message.success('Tạo mới đơn hàng thành công');
          handleSuccess?.();
          form.resetFields();
        })
        .catch();
    }
  };

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.SUPPLIER.GET_ALL }).then(res => {
      setSuppliers([...res?.data?.data]);
    });
  }, []);

  useEffect(() => {
    requestToken({ url: API_URL.PRODUCT.GET_ALL }).then(res => {
      setProducts([...res?.data]);
    });
  }, []);

  const onQuantityChange = (val: number) => {
    setSelectedProduct((prev: any) => ({ ...prev, quantity: val }));
  };

  const onProductChange = (val: string) => {
    setSelectedProduct((prev: any) => ({ ...prev, product: JSON.parse(val) }));
  };

  const onAddProduct = () => {
    if(selectedProduct?.quantity > 0 && selectedProduct?.product) {
      setSelectedProducts(prev => [...prev, selectedProduct]);
    }
  };

  return (
    <SProductModal>
      <List
        header={<div>Các sản phẩm đã được thêm</div>}
        bordered
        dataSource={selectedProducts}
        renderItem={(item: any) => (
          <List.Item style={{ cursor: 'pointer' }}>
            <p>{item?.product?.name}</p>
            <p>Giá: {item?.product?.price}</p>
            <p>Số lượng: {item?.quantity}</p>
          </List.Item>
        )}
      />
      <Row>
        <Col span={24}>
          <div className="product__item">
            <Select
              placeholder="Tên sản phẩm"
              onChange={val => onProductChange(val)}
            >
              {React.Children.toArray(
                products.map((s: any, i: number) => (
                  <Select.Option value={JSON.stringify(s)}>
                    {s?.name}
                  </Select.Option>
                )),
              )}
            </Select>
            <InputNumber min={1} onChange={onQuantityChange} />
          </div>
        </Col>
        <Col span={10} offset={8}>
          <Button
            style={{ marginBottom: 20 }}
            type="primary"
            onClick={onAddProduct}
          >
            Thêm
          </Button>
        </Col>
      </Row>

      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Nhà cung cấp"
          name="supplier"
          rules={[{ required: true, message: 'Trường bắt buộc' }]}
        >
          <Select>
            {React.Children.toArray(
              suppliers.map((s: any) => (
                <Select.Option value={JSON.stringify(s)}>
                  {s?.name}
                </Select.Option>
              )),
            )}
          </Select>
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
