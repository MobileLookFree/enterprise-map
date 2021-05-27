import { useMemo } from 'react';
import { UserOutlined, FileTextOutlined, PhoneOutlined } from '@ant-design/icons';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';

import colors from 'assets/colors';

const Chief = ({ openedEnterprise }) => {
  const phones = useMemo(() => openedEnterprise.chiefPhone
    ? openedEnterprise.chiefPhone.toString()
      .split(',')
      .map(phone => phone.trim())
    : [],
    [openedEnterprise]);
  
  return (
    <div className='app-ui-detailing-details-chief'>
      <div className='app-ui-detailing-details-chief-icon'>
        <UserOutlined style={styles.chiefIcon} />
      </div>
      <div className='app-ui-detailing-details-chief-info'>
        <FieldTitle>{openedEnterprise.chiefPosition || 'Должность'}</FieldTitle>
        <FieldText>{openedEnterprise.chiefFullName || 'Иванов Иван Иванович'}</FieldText>
        <FieldTitle>E-Mail</FieldTitle>
        <FieldText>
          <a
            className='app-ui-detailing-details-chief-link'
            href={`mailto:${openedEnterprise.email}`}
          >
            <FileTextOutlined />
            {openedEnterprise.email}
          </a>
        </FieldText>
      </div>
      <div className='app-ui-detailing-details-chief-phones'>
        {phones.map((phone, index) =>
          <div
            className='app-ui-detailing-details-chief-phones-phone'
            key={index}
          >
            <FieldTitle>Телефон</FieldTitle>
            <FieldText>
              <a
                className='app-ui-detailing-details-chief-link'
                href={`tel:+${phone}`}
              >
                <PhoneOutlined />
                {phone}
              </a>
            </FieldText>
          </div>)}
      </div>
    </div>
  )
}

const styles = {
  chiefIcon: {
    color: colors.colorDarkBlue
  }
}

export default Chief;