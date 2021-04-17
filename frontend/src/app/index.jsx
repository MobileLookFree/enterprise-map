import { useState, useCallback } from 'react'
import Map from '../components/Map';
import Modal from '../components/Modal';
import Charts from './Charts';

const App = () => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() =>
    setVisible(true), [setVisible]);

  const closeModal = useCallback(() =>
    setVisible(false), [setVisible]);

  return (
    <div className="app">
      <Map openModal={openModal} />
      <Modal
        className="app-map-modal"
        title="Статистика"
        visible={visible}
        onCancel={closeModal}
        destroyOnClose
      >
        <Charts />
      </Modal>
    </div>
  );
}

export default App;