import './index.scss';

const FieldText = ({ className, style, children }) =>
  <span
    className={`app-ui-detailing-field-text${className ? ` ${className}` : ''}`}
    style={style}
  >
    {children}
  </span>

export default FieldText;