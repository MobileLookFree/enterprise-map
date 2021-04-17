import React from 'react';
import { createSelector } from 'reselect';
import './index.scss';

const getStyle = createSelector(
  ({ color }) => color,
  ({ backgroundColor }) => backgroundColor,
  ({ style }) => style,
  (color, backgroundColor, style = {}) => ({
    color,
    backgroundColor,
    ...style
  })
)

const Button = React.forwardRef((props, ref) => {
  const { className, onClick, children, disabled, ...buttonProps } = props;

  return (
    <button
      ref={ref}
      {...buttonProps}
      style={getStyle(props)}
      className={`app-ui-button${className ? ` ${className}` : ''}${disabled ? ' disabled' : ''}`}
      onClick={disabled ? undefined : onClick}>
      {children}
    </button>
  );
});

export default Button;