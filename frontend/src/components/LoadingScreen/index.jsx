import { LoadingIcon } from '../Icons/LoadingIcon';
import './index.scss';

const LoadingScreen = ({ message }) => {
  return (
    <div className='app-ui-loading-screen'>
      <LoadingIcon />
      <span className='app-ui-loading-screen-message'>{message}</span>
    </div>
  )
}

LoadingScreen.defaultProps = {
  message: 'Загрузка...'
}

export default LoadingScreen;