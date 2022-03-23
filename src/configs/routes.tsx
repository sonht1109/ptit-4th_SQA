import React from 'react';
import DemoComponent from 'components/DemoComponent';
import Login from 'containers/Login'
import Order from 'containers/Order';

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
    path: '/login',
  },
  {
    name: 'order',
    private: false,
    component: () => <Order />,
    path: '/order',
  },
];

export default ROUTES;
