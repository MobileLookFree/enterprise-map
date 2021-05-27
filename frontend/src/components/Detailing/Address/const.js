import { message } from 'antd';

export const copyText = (value) => {
  navigator.clipboard &&
    navigator.clipboard.writeText(value)
      .then(() => message.success('Скопировано в буфер обмена'));
};