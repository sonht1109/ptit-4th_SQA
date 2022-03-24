/*
*
* Supplier
* make by phamthainb
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersSupplier from './store/reducers';
import WrapSupplier from './style';

interface Props {}

// eslint-disable-next-line
function Supplier({}: Props) {
useInjectReducer('Supplier', reducersSupplier);
return (
<ErrorBound>
  <WrapSupplier> Supplier </WrapSupplier>
</ErrorBound>
);
}
export default memo(Supplier);