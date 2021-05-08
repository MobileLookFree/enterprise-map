import { LoadingIcon } from '../Icons/LoadingIcon';
import { ErrorIcon } from '../Icons/ErrorIcon';
import './index.scss';

const LoadingScreen = ({ mode, message }) => {
  return (
    <div className='app-ui-loading-screen'>
      {{
        loading: <LoadingIcon />,
        error: <ErrorIcon />
      }[mode]}
      <span className='app-ui-loading-screen-message'>{mode === 'loading'
        ? message
        : 'Что-то пошло не так:( Повторите попытку позже'}
      </span>
    </div>
  )
}

LoadingScreen.defaultProps = {
  mode: 'loading',
  message: 'Загрузка...'
}

export default LoadingScreen;