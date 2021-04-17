import { useCallback } from 'react';
import Button from '../Button';
import { FullScreen, ExitFullScreen, Close } from '../Icons/ModalIcons';

const Title = ({
  title,
  onCancel,
  isFullScreenOpen,
  setFullScreen,
  controls,
  withFullScreen
}) => {
  const setFullScreenHandler = useCallback(() =>
    setFullScreen && setFullScreen(!isFullScreenOpen), [isFullScreenOpen, setFullScreen]);

  return (
    <div className="app-ui-modal-title">
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
              ? <FullScreen color='#1F364D' />
              : <ExitFullScreen color='#1F364D' />}
          </Button>}
        {onCancel &&
          <Button onClick={onCancel}>
            <Close color='#1F364D' />
          </Button>}
      </div>
    </div>
  )
}

Title.defaultProps = {
  title: 'Заголовок',
  controls: null,
};

export default Title;