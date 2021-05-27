import React from 'react';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';
import { FileImageOutlined, PhoneOutlined, FileTextOutlined } from '@ant-design/icons';

import colors from 'assets/colors';

const Base = ({ openedEnterprise }) => (
  <div className='app-ui-detailing-details-main-base'>
    <div className='app-ui-detailing-icon'>
      <FileImageOutlined style={styles.enterpriseIcon} />
    </div>
    <div className='app-ui-detailing-details-main-base-info'>
      <FieldTitle>Краткое наименование</FieldTitle>
      <FieldText>{openedEnterprise.name || 'Предприятие'}</FieldText>
      <FieldTitle>ОКПО</FieldTitle>
      <FieldText>{openedEnterprise.okpo || 100500}</FieldText>
    </div>
    <div className='app-ui-detailing-details-main-base-status'>
      <FieldTitle>Тип дейстельности</FieldTitle>
      <FieldText>{openedEnterprise.activityType || 'Неизвестно'}</FieldText>
      <FieldTitle>Статус</FieldTitle>
      <FieldText>{openedEnterprise.status || 'Неизвестно'}</FieldText>
    </div>
    <div className='app-ui-detailing-details-main-base-contacts'>
      {openedEnterprise.phone &&
        <React.Fragment>
          <FieldTitle>Телефон</FieldTitle>
          <FieldText>
            <a
              className='app-ui-detailing-link'
              href={`tel:+${openedEnterprise.phone}`}
            >
              <PhoneOutlined />
              {openedEnterprise.phone}
            </a>
          </FieldText>
        </React.Fragment>}
      {openedEnterprise.email &&
        <React.Fragment>
          <FieldTitle>E-Mail</FieldTitle>
          <FieldText>
            <a
              className='app-ui-detailing-link'
              href={`mailto:${openedEnterprise.email}`}
            >
              <FileTextOutlined />
              {openedEnterprise.email}
            </a>
          </FieldText>
        </React.Fragment>}
      <FieldTitle>Краткий адрес</FieldTitle>
      <FieldText>
        {`${openedEnterprise.regionType + openedEnterprise.region}, ${openedEnterprise.street}`}
      </FieldText>
    </div>
  </div>
)


const styles = {
  enterpriseIcon: {
    color: colors.colorDarkBlue
  }
}

export default Base;