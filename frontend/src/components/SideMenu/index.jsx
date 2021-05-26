import React, { useCallback } from 'react';
import { Layout, Menu, message } from 'antd';
import {
  UnorderedListOutlined,
  StarOutlined,
  CloudDownloadOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { iconStyles } from 'assets/styles';
import './index.scss';

const SideMenu = ({
  collapsed,
  setFavoritesView,
  openSettings,
  favorites,
  startDownloading,
}) => {
  const onSelect = useCallback(({ key }) =>
    key === 'download'
      ? startDownloading()
      : key === 'all'
        ? setFavoritesView(false)
        : favorites.length
          ? setFavoritesView(true)
          : message.warning('У Вас пока нет избранных'),
    [startDownloading, setFavoritesView, favorites]);

  return (
    <React.Fragment>
      <Layout.Sider
        className='app-ui-side-menu'
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={64}
        width={256}
      >
        <div className='app-ui-side-menu-logo-wrapper'>
          <img
            className='app-ui-side-menu-logo'
            src='logo.png'
            alt='НИИ ЦЕНТР'
          />
        </div>
        <Menu
          mode='inline'
          onSelect={onSelect}
        >
          <Menu.Item
            key='all'
            icon={<UnorderedListOutlined style={iconStyles} />}
          >
            Все
        </Menu.Item>
          <Menu.Item
            key='favorites'
            icon={<StarOutlined style={iconStyles} />}
          >
            Избранные
        </Menu.Item>
          <Menu.Item
            key='download'
            icon={<CloudDownloadOutlined style={iconStyles} />}
          >
            Загрузить данные
        </Menu.Item>
        </Menu>
        <Menu
          mode='inline'
          onClick={openSettings}
          style={styles.settings}
        >
          <Menu.Item
            key='settings'
            icon={<SettingOutlined style={iconStyles} />}
          >
            Настройки
        </Menu.Item>
        </Menu>
      </Layout.Sider>
    </React.Fragment>
  )
}

const styles = {
  settings: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
}

export default SideMenu;