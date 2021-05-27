import { useMemo } from 'react';
import { Table } from 'antd';
import COLUMNS from './columns';

const Address = ({ address }) => {
  const dataSource = useMemo(() =>
    [
      {
        key: 'address',
        field: 'Полный адрес',
        value: address.result
      },
      {
        key: 'federalDistrict',
        field: 'Федеральный район',
        value: address.federal_district
      },
      {
        key: 'cityArea',
        field: 'Район',
        value: address.city_area
      },
      {
        key: 'fiasId',
        field: 'Идентификатр ФИАС',
        value: address.fias_id
      },
      {
        key: 'kladrId',
        field: 'Идентификатр КЛАДР',
        value: address.kladr_id
      },
      {
        key: 'okato',
        field: 'Идентификатр ОКАТО',
        value: address.okato
      },
      {
        key: 'oktmo',
        field: 'Идентификатр ОКТМО',
        value: address.oktmo
      },
      {
        key: 'postalCode',
        field: 'Почтовый индекс',
        value: address.postal_code
      },
      {
        key: 'coordinates',
        field: 'Координаты',
        value: `${address.geo_lat}, ${address.geo_lon}`
      }
    ], [address]);
  
  return (
    <Table
      columns={COLUMNS}
      dataSource={dataSource}
      pagination={false}
    />
  )
}

Address.defaultProps = {
  address: {}
}

export default Address;