import { useMemo } from 'react';
import { Table } from 'antd';
import COLUMNS from './columns';

const Tables = ({ stats }) => {
  const dataSource = useMemo(() =>
    stats.map((element, index) => ({
      ...element,
      key: index,
      firstMonth: element.data[0],
      secondMonth: element.data[1],
      thirdMonth: element.data[2],
    })), [stats]);

  return (
    <Table
      columns={COLUMNS}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

Tables.defaultProps = {
  stats: []
}

export default Tables;