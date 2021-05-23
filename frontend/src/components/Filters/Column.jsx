import Button from 'components/Button';
import { ClearOutlined } from '@ant-design/icons';
import { iconStyles } from 'assets/styles';

const Column = ({
  title,
  type,
  onDrop,
  children
}) => (
  <div className={`app-ui-filters-column${type ? ` ${type}` : ''}`}>
    <div className='app-ui-filters-column-title'>
      <span className='app-ui-filters-column-title-text'>{title}</span>
      <Button onClick={onDrop}>
        <ClearOutlined style={iconStyles} />
      </Button>
    </div>
    <div className='app-ui-filters-column-content'>
      {children}
    </div>
  </div>
)

export default Column;