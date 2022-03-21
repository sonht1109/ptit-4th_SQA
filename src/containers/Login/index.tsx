/*
 *
 * Login
 * make by phamthainb
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersLogin from './store/reducers';
import WrapLogin from './style';
import Input from 'antd/lib/input/Input';
import Password from 'antd/lib/input/Password';
import { Button, Form } from 'antd';

interface Props {}

// eslint-disable-next-line
function Login({}: Props) {
  useInjectReducer('Login', reducersLogin);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <ErrorBound>
      <WrapLogin>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </WrapLogin>
    </ErrorBound>
  );
}
export default memo(Login);
