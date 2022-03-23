/*
 *
 * Product
 * make by phamthainb
 */

import React, { Children, memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersProduct from './store/reducers';
import WrapProduct from './style';
import Layout from 'components/Layout';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { Button, Card, Col, message, Popconfirm, Row } from 'antd';
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import SectionHandle from 'components/SectionHandle';
import Modal from 'antd/lib/modal/Modal';
import Add from './modals/Add';
import Edit from './modals/Edit';
import View from './modals/View';

interface Props {}

// eslint-disable-next-line
function Product({}: Props) {
  useInjectReducer('Product', reducersProduct);

  const [data, setData] = useState<any[]>([]);

  const [selected, setSelected] = useState<number | null>(null);

  const [openEdit, toggleEdit] = useState<boolean>(false);
  const [openAdd, toggleAdd] = useState<boolean>(false);
  const [openView, toggleView] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.PRODUCT.GET_ALL }).then(res => {
      setData(res?.data);
    });
  }, [refetch]);

  const onDelete = () => {
    requestToken({ method: 'DELETE', url: API_URL.PRODUCT.DELETE(selected) })
      .then(() => {
        message.success('Thực hiện xóa sản phẩm thành công');
        setRefetch(prev => !prev);
        setSelected(null);
      })
      .catch(() => {
        message.success('Vui lòng thử lại');
      });
  };

  return (
    <ErrorBound>
      <Layout>
        <WrapProduct>
          <h2>Quản lý sản phẩm</h2>

          <SectionHandle>
            <Button onClick={() => toggleAdd(true)}>
              <FaPlus color="#1c8efa" size={12} />
            </Button>
            {selected && (
              <Button onClick={() => toggleView(true)}>
                <FaEye color="#1c8efa" size={12} />
              </Button>
            )}
            {selected && (
              <Button onClick={() => toggleEdit(true)}>
                <FaEdit color="#1c8efa" size={12} />
              </Button>
            )}
            {selected && (
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa sản phẩm này ?"
                onConfirm={onDelete}
              >
                <Button>
                  <FaTrash color="#1c8efa" size={12} />
                </Button>
              </Popconfirm>
            )}
          </SectionHandle>

          <div className="list">
            <Row>
              {Children.toArray(
                data.map((d: any) => {
                  const isSelected = d?.id === selected;
                  return (
                    <Col span={6}>
                      <Card
                        title={d?.name}
                        style={{
                          width: '100%',
                          cursor: 'pointer',
                          height: '100%',
                          background: isSelected ? '#f2f4f5' : 'white',
                        }}
                        onClick={() => setSelected(isSelected ? null : d?.id)}
                      >
                        <p>Giá: {d?.price}</p>
                        <p>Mô tả: {d?.description}</p>
                        <p>Công dụng: {d?.usageOfProduct}</p>
                        <p>Cách sử dụng: {d?.guide}</p>
                      </Card>
                    </Col>
                  );
                }),
              )}
            </Row>
          </div>
        </WrapProduct>
      </Layout>

      <Modal
        title="Thêm mới mặt hàng"
        visible={openAdd}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => {
          toggleAdd(false);
        }}
      >
        <Add
          handleSuccess={() => {
            setRefetch(prev => !prev);
            toggleAdd(false);
          }}
        />
      </Modal>

      {selected && (
        <Modal
          title="Chỉnh sửa mặt hàng"
          visible={openEdit}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          onCancel={() => toggleEdit(false)}
        >
          <Edit
            id={selected}
            handleSuccess={() => {
              setRefetch(prev => !prev);
              toggleEdit(false);
            }}
          />
        </Modal>
      )}

      {selected && (
        <Modal
          title="Chi tiết mặt hàng"
          visible={openView}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          onCancel={() => toggleView(false)}
        >
          <View id={selected} />
        </Modal>
      )}
    </ErrorBound>
  );
}
export default memo(Product);
