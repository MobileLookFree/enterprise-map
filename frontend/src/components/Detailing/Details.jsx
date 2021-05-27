import React, { useState, useMemo } from 'react';
import { Collapse } from 'antd';
import DataGenerator from './DataGenerator';
import Chief from './Chief';
import Graphs from './Graphs';
import Tables from './Tables';
import Address from './Address';
import Metro from './Metro';

const { Panel } = Collapse;
const defaultActiveKey = ['mainInfo', 'chief', 'graphs', 'tables'];

const Details = ({ openedEnterprise }) => {
  const [randomData, setRandomData] = useState([]);

  const metro = useMemo(() =>
    openedEnterprise.dadata && openedEnterprise.dadata.metro, [openedEnterprise]);

  return (
    <React.Fragment>
      <DataGenerator
        onChange={setRandomData}
      />
      <div className='app-ui-detailing-details'>
        <Collapse defaultActiveKey={defaultActiveKey}>
          <Panel
            header='Основная информация'
            key='mainInfo'
          >

          </Panel>
          <Panel
            header='Руководство'
            key="chief"
          >
            <Chief openedEnterprise={openedEnterprise} />
          </Panel>
          <Panel
            header='Детализация в графиках'
            key='graphs'
          >
            <Graphs series={randomData} />
          </Panel>
          <Panel
            header='Детализация в таблицах'
            key='tables'
          >
            <Tables stats={randomData} />
          </Panel>
          <Panel
            header='Адресные данные'
            key='address'
          >
            <Address address={openedEnterprise.dadata} />
          </Panel>
          {metro &&
            <Panel
              header='Метро'
              key='metro'
            >
              <Metro metro={metro} />
            </Panel>}
        </Collapse>
      </div>
    </React.Fragment>
  )
}

Details.defaultProps = {
  openedEnterprise: {}
}

export default Details;