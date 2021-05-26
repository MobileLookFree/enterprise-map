import { useCallback } from 'react';
import Button from '../Button';
import { FullScreen, ExitFullScreen, Close } from './Icons';
import colors from 'assets/colors';

const Title = ({
  title,
  onCancel,
  isFullScreenOpen,
  setFullScreen,
  controlsBefore,
  controls,
  withFullScreen
}) => {
  const setFullScreenHandler = useCallback(() =>
    setFullScreen && setFullScreen(!isFullScreenOpen), [isFullScreenOpen, setFullScreen]);

  return (
    <div className="app-ui-modal-title">
      {controlsBefore}
      <div className="app-ui-modal-title-text-container">
        <span
          className="app-ui-modal-title-text"
          title={typeof title === 'string'
            ? title
            : ''}
        >
          {title}
        </span>
      </div>
      <div className="app-ui-modal-title-buttons">
        {controls}
        {setFullScreen && withFullScreen
          && <Button onClick={setFullScreenHandler}>
            {!isFullScreenOpen
              ? <FullScreen color={colors.colorGray5} />
              : <ExitFullScreen color={colors.colorGray5} />}
          </Button>}
        {onCancel &&
          <Button onClick={onCancel}>
            <Close color={colors.colorGray5} />
          </Button>}
      </div>
    </div>
  )
}

Title.defaultProps = {
  title: 'Заголовок',
  controlsBefore: null,
  controls: null,
};

export default Title;