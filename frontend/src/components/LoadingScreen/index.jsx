import { LoadingOutlined } from '@ant-design/icons';
import { ErrorIcon } from '../Icons/ErrorIcon';
import colors from 'assets/colors';
import './index.scss';

const LoadingScreen = ({ mode, message }) => {
  return (
    <div className='app-ui-loading-screen'>
      {{
        loading: <LoadingOutlined style={styles.icon}/>,
        error: <ErrorIcon />
      }[mode]}
      <span className='app-ui-loading-screen-message'>{mode === 'loading'
        ? message
        : 'Что-то пошло не так:( Повторите попытку позже'}
      </span>
    </div>
  )
}

const styles = {
  icon: {
    fontSize: 72,
    color: colors.color_gray3
  }
}

LoadingScreen.defaultProps = {
  mode: 'loading',
  message: 'Загрузка...'
}

export default LoadingScreen;