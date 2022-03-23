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
import { Button, Form, message } from 'antd';
import { BASE_URL, request } from 'api/axios';
import API_URL from 'api/url';
import axios from 'axios';
import * as qs from 'qs'
import { useHistory } from 'react-router-dom';

interface Props {}

// eslint-disable-next-line
function Login({}: Props) {
  useInjectReducer('Login', reducersLogin);

  const history = useHistory();

  const onFinish = (values: any) => {

    axios({
      method: 'POST',
      url: BASE_URL + API_URL.USER.LOGIN,
      data: qs.stringify({...values}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res: any) => {
      localStorage.setItem('token', res?.data.access_token)
      history.push('/product')
    })
    .catch(() => {
      message.error('Người dùng không tồn tại !');
    })
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
            rules={[{ required: true, message: 'Trường bắt buộc!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Trường bắt buộc!' }]}
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
