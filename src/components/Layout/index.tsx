/**
 *
 * Layout
 * make by phamthainb
 */
import { Menu } from 'antd';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BiPackage } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <SLayout>
      <Menu style={{ width: 256 }} mode="inline">
        <Menu.Item key="1">
          <Link to="/product">
            <BiPackage size={20} />
            <span>Quản lý sản phẩm</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/order">
            <AiOutlineShoppingCart size={20} />
            <span>Quản lý đơn đặt hàng</span>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="children">{children}</div>
    </SLayout>
  );
};

export default Layout;

const SLayout = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  .children {
    flex-grow: 1;
  }
  .ant-menu {
    min-height: 100vh;

    .ant-menu-item {
      .ant-menu-title-content {
        a {
          display: flex;
          align-items: center;
          span {
            margin-left: 8px;
          }
        }
      }
    }
  }
`;
