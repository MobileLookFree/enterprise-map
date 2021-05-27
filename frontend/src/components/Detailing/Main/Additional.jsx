
import React from 'react';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';

const Additional = ({ openedEnterprise }) => (
  <div className='app-ui-detailing-details-main-additional'>
    {(openedEnterprise.branch || openedEnterprise.subbranch) &&
      <FieldTitle>Дополнительная информация</FieldTitle>}
    {openedEnterprise.branch &&
      <React.Fragment>
        <FieldTitle>Направление</FieldTitle>
        <FieldText>{openedEnterprise.branch}</FieldText>
      </React.Fragment>}
    {openedEnterprise.subbranch &&
      <React.Fragment>
        <FieldTitle>Суб-направление</FieldTitle>
        <FieldText>{openedEnterprise.subbranch}</FieldText>
      </React.Fragment>}
  </div>
)

export default Additional;