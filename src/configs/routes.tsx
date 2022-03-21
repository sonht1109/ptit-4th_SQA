import React from 'react';
import DemoComponent from 'components/DemoComponent';
import Login from 'containers/Login'

export interface ItemRoute {
  name: string;
  private: boolean;
  component?: Function;
  path?: string;
  child?: ItemRoute[];
}

const ROUTES = [
  {
    name: 'trang chủ',
    private: false,
    component: () => <DemoComponent name="index" />,
    path: '/',
  },
  {
    name: 'login',
    private: false,
    component: () => <Login />,
    path: '/',
  },
];

export default ROUTES;
