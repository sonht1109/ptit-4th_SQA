/*
 *
 * Home
 * make by phamthainb
 */

import React, { memo, useEffect } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersHome from './store/reducers';
import WrapHome from './style';
import { useHistory } from 'react-router-dom';

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);

  const history = useHistory();

  useEffect(() => {
    history.replace('/login');
  }, [history]);
  
  return (
    <ErrorBound>
      <WrapHome> Home </WrapHome>
    </ErrorBound>
  );
}
export default memo(Home);
