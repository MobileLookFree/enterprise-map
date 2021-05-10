import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal as AntdModal } from 'antd';
import Title from './Title';
import './index.scss';

import { createSelector } from 'reselect';

const getStyles = createSelector(
  ({ style }) => style,
  (props, isFullScreenOpen) => isFullScreenOpen,
  (style, isFullScreenOpen) => ({
    ...{ top: 64 },
    ...style,
    ...isFullScreenOpen ? { top: 0, borderRadius: 0, height: '100vh' } : {}
  })
);

const Modal = (props) => {
  const {
    className,
    wrapClassName,
    withTitle,
    title,
    children,
    ...modalProps
  } = props;
  const [isFullScreenOpen, setFullScreen] = useState(false);

  return (
    <AntdModal
      {...modalProps}
      className={`app-ui-modal${className ? ` ${className}` : ''}${isFullScreenOpen ? ` ${'-fullScreen'}` : ''}`}
      closable={false}
      wrapClassName={`app-ui-modal-wrap${wrapClassName ? ` ${wrapClassName}` : ''}`}
      title={withTitle
        && <Title
          {...modalProps}
          title={title}
          isFullScreenOpen={isFullScreenOpen}
          setFullScreen={setFullScreen}
        />}
      style={getStyles(props, isFullScreenOpen)}
      footer={null}
    >
      {children}
    </AntdModal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  withTitle: true,
  title: 'Заголовок',
  children: null,
  withFullScreen: true,
};

export default Modal;