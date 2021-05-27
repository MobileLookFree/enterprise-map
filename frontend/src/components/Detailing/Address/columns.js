import Button from 'components/Button';
import { CopyOutlined } from '@ant-design/icons';
import { iconStyles } from 'assets/styles';

import copyText from 'lib/copyText';

const COLUMNS = [
  {
    title: 'Поле',
    dataIndex: 'field',
    key: 'field',
  },
  {
    title: 'Значение',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Скопировать',
    dataIndex: 'copy',
    key: 'copy',
    width: 120,
    render: (text, row) =>
      <Button
        className='app-ui-detailing-details-address-table-copy'
        onClick={() => copyText(row.value)}
      >
        <CopyOutlined style={iconStyles} />
      </Button>
  },
];

export default COLUMNS