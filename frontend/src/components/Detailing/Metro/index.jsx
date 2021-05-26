import { useMemo } from 'react';
import { Table } from 'antd';
import COLUMNS from './columns';

const Metro = ({ metro }) => {
  const dataSource = useMemo(() =>
    metro.map((element, index) => ({
      ...element,
      key: index
    })), [metro]);

  return (
    <Table
      columns={COLUMNS}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

Metro.defaultProps = {
  metro: []
}

export default Metro;