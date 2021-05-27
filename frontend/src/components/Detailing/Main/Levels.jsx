
import React, { useMemo } from 'react';
import { Table } from 'antd';
import FieldTitle from '../FieldTitle';

import COLUMNS from './columns';

const Levels = ({ openedEnterprise }) => {
  const dataSource = useMemo(() => [
    {
      key: 'leve1',
      field: 'Уровень 1',
      value: openedEnterprise.level1
    },
    {
      key: 'level2',
      field: 'Уровень 2',
      value: openedEnterprise.level2
    },
    {
      key: 'level3',
      field: 'Уровень 3',
      value: openedEnterprise.level3
    },
  ], [openedEnterprise]);

  return (
    <React.Fragment>
      <FieldTitle>Уровни иерархии</FieldTitle>
      <div className='app-ui-detailing-details-main-levels'>
        <Table
          columns={COLUMNS}
          dataSource={dataSource}
          pagination={false}
        />
      </div>
    </React.Fragment>
  )
}

export default Levels;