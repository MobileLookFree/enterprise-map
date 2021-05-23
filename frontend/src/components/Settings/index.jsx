import { useCallback } from 'react';
import { message } from 'antd';
import Button from 'components/Button';
import { DeleteOutlined } from '@ant-design/icons';
import { iconStyles } from 'assets/styles';
import colors from 'assets/colors';
import './index.scss';

const Settings = ({ dropFavorites }) => {
  const onDropFavorites = useCallback(() => {
    dropFavorites();
    message.success('Настройки избранных сброшены');
  }, [dropFavorites]);

  return (
    <div className='app-ui-settings'>
      <span className='app-ui-settings-title'>
        Сбросить текущих настроек избранных
      </span>
      <Button
        className='app-ui-settings-drop-button'
        onClick={onDropFavorites}
      >
        <DeleteOutlined style={styles.delete} />
        <span className='app-ui-settings-drop-button-text'>
          Сбросить
        </span>
      </Button>
    </div>
  )
}

const styles = {
  delete: {
    ...iconStyles,
    color: colors.colorWhite
  }
}

export default Settings;