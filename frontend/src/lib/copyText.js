import { message } from 'antd';

const  copyText = (value) => {
  navigator.clipboard &&
    navigator.clipboard.writeText(value)
      .then(() => message.success('Скопировано в буфер обмена'));
};

export default copyText;