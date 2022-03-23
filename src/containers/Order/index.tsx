/*
 *
 * Order
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersOrder from './store/reducers';
import WrapOrder from './style';
import DataList from './DataList';
import Layout from 'components/Layout';

interface Props {}

// eslint-disable-next-line
function Order({}: Props) {
  useInjectReducer('Order', reducersOrder);
  return (
    <ErrorBound>
      <Layout>
        <WrapOrder>
          <DataList />
        </WrapOrder>
      </Layout>
    </ErrorBound>
  );
}
export default memo(Order);
