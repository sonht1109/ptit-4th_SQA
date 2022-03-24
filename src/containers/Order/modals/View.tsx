import { List } from 'antd';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { SProductModal } from 'containers/Product/style';
import React, { useEffect, useState } from 'react';

export default function View({ id }: { id: number }) {
  const [detail, setDetail] = useState<any>({});

  useEffect(() => {
    if (id) {
      requestToken({ url: API_URL.ORDER.GET(id) }).then(res => {
        setDetail({ ...res?.data.data });
      });
    }
  }, [id]);

  return (
    <SProductModal>
      <List
        header={<div>Danh sách sản phẩm</div>}
        bordered
        dataSource={detail?.listProduct}
        renderItem={(item: any) => (
          <List.Item>
            <p>{item?.product?.name}</p>
            <p>Giá: {item?.product?.price}</p>
            <p>Số lượng: {item?.quantity}</p>
          </List.Item>
        )}
      />
    </SProductModal>
  );
}
