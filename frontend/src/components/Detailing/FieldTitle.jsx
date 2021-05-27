import './index.scss';

const FieldTitle = ({ className, style, children }) =>
  <span
    className={`app-ui-detailing-field-title${className ? ` ${className}` : ''}`}
    style={style}
  >
    {children}
  </span>

export default FieldTitle;