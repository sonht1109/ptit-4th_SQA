/*
 *
 * Order
 * make by phamthainb
 */

import React, { Children, memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersOrder from './store/reducers';
import WrapOrder from './style';
import Layout from 'components/Layout';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import WrapProduct from 'containers/Product/style';
import SectionHandle from 'components/SectionHandle';
import { Button, Card, Col, Modal, Row } from 'antd';
import { FaEye, FaPlus } from 'react-icons/fa';
import View from './modals/View';
import Add from './modals/Add';

interface Props {}

// eslint-disable-next-line
function Order({}: Props) {
  useInjectReducer('Order', reducersOrder);

  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const [openAdd, toggleAdd] = useState<boolean>(false);
  const [openView, toggleView] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    requestToken({ url: API_URL.ORDER.GET_ALL }).then(res => {
      setData([...res?.data?.data])
    });
  }, [refetch]);

  return (
    <ErrorBound>
      <Layout>
        <WrapProduct>
          <h2>Quản lý đơn nhập hàng</h2>

          <SectionHandle>
            <Button onClick={() => toggleAdd(true)}>
              <FaPlus color="#1c8efa" size={12} />
            </Button>
            {selected && (
              <Button onClick={() => toggleView(true)}>
                <FaEye color="#1c8efa" size={12} />
              </Button>
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
                        <p>Nhân viên: {d?.staff?.name}</p>
                        <p>Ngày đặt: {d?.date}</p>
                        <p>Tổng giá tiền: {d?.total}</p>
                        <p>Tổng sản phẩm: {d?.listProduct?.length}</p>
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
        title="Thêm mới đơn đặt hàng"
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
          title="Chi tiết đơn đặt hàng"
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
export default memo(Order);
