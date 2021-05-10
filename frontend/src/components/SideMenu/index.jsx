import { Layout, Menu } from 'antd';
import './index.scss';

const SideMenu = ({
  collapsed
}) => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className='app-ui-side-menu'
    >
      <Menu mode="inline">
      </Menu>
    </Layout.Sider>
  )
}

export default SideMenu;