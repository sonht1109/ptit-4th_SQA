import { request } from 'api/axios';
import API_URL from 'api/url';
import React, { useEffect, useState } from 'react';
import { SDataList } from './style';

export default function DataList() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    request({ url: API_URL.ORDER.GET_ALL, method: 'GET' }).then(res => {
      console.log(res);
    });
  }, []);

  return <SDataList></SDataList>;
}
