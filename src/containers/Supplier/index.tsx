/*
 *
 * Supplier
 * make by phamthainb
 */

import React, { Children, memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersSupplier from './store/reducers';
import WrapProduct from 'containers/Product/style';
import { Card, Col, Row } from 'antd';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import Layout from 'components/Layout';

interface Props {}

// eslint-disable-next-line
function Supplier({}: Props) {
  useInjectReducer('Supplier', reducersSupplier);

  const [openAdd, toggleAdd] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    requestToken({ method: 'GET', url: API_URL.SUPPLIER.GET_ALL }).then(res => {
      setData([...res?.data?.data]);
    });
  }, []);

  return (
    <ErrorBound>
      <Layout>
        <WrapProduct>
          <h2>Quản lý nhà cung cấp</h2>

          <div className="list">
            <Row>
              {Children.toArray(
                data.map((d: any) => {
                  return (
                    <Col span={6}>
                      <Card
                        title={d?.name}
                        style={{
                          width: '100%',
                          cursor: 'pointer',
                          height: '100%',
                        }}
                      >
                        <p>Địa chỉ: {d?.address}</p>
                        <p>SĐT: {d?.tel}</p>
                      </Card>
                    </Col>
                  );
                }),
              )}
            </Row>
          </div>
        </WrapProduct>
      </Layout>
    </ErrorBound>
  );
}
export default memo(Supplier);
