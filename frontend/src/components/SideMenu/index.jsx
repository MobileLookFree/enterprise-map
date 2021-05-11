import { useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { BarChartOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { iconStyles } from 'assets/styles';
import './index.scss';

const SideMenu = ({
  collapsed,
  startDownloading,
}) => {
  const onSelect = useCallback(({ key }) => 
    key === 'download'
      ? startDownloading()
      : console.log(key), [startDownloading]);

  return (
    <Layout.Sider
      className='app-ui-side-menu'
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={64}
      width={256}
    >
      <Menu mode='inline' onSelect={onSelect}>
        <Menu.Item
          key='chart'
          icon={<BarChartOutlined style={iconStyles} />}
        >
          График
        </Menu.Item>
        <Menu.Item
          key='download'
          icon={<CloudDownloadOutlined style={iconStyles} />}
        >
          Скачать
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default SideMenu;