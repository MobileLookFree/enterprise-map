import { useCallback } from 'react';
import Button from 'components/Button';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';

import copyText from 'lib/copyText';
import downloadJSON from 'lib/downloadJSON';

const Buttons = ({ openedEnterprise }) => {
  const onCopy = useCallback(() =>
    copyText(JSON.stringify(openedEnterprise)), [openedEnterprise]);
  
  const onSave = useCallback(() =>
    downloadJSON(
      openedEnterprise,
      `Данные предприятия «${openedEnterprise.fullName || 'Предприятие'}»`
    ), [openedEnterprise]);

  return (
    <div className='app-ui-detailing-details-buttons'>
      <Button
        className='app-ui-detailing-details-buttons-button'
        onClick={onCopy}
      >
        <CopyOutlined />
        Скопировать данные
      </Button>
      <Button
        className='app-ui-detailing-details-buttons-button'
        onClick={onSave}
      >
        <DownloadOutlined />
        Загрузить данные
      </Button>
    </div>
  )
}

export default Buttons;