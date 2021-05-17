import React from 'react'
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import Settings from 'components/Settings';
import Charts from './Charts';

import { setFavorite, dropFavorites } from 'store/enterprises/favorites/actions';

const Modals = ({
  openedEnterprise,
  isDetailsVisible,
  closeDetails,
  isSettingsVisible,
  closeSettings,
  // redux
  favorites,
  setFavorite,
  dropFavorites,
}) => {
  return (
    <React.Fragment>
      <Modal
        className='app-ui-map-modal'
        title={openedEnterprise.fullName || 'Предприятие'}
        visible={isDetailsVisible}
        onCancel={closeDetails}
        destroyOnClose
      >
        <Charts
          openedEnterprise={openedEnterprise}
          favorites={favorites}
          setFavorite={setFavorite}
        />
      </Modal>
      <Modal
        className='app-ui-settings-modal'
        title='Настройки'
        visible={isSettingsVisible}
        onCancel={closeSettings}
        destroyOnClose
      >
        <Settings dropFavorites={dropFavorites} />
      </Modal>
      {/* <Modal
        className='app-ui-settings-modal'
        title='Фильтры'
        visible={isSettingsVisible}
        onCancel={closeSettings}
        destroyOnClose
      >
        <Settings dropFavorites={dropFavorites} />
      </Modal> */}
    </React.Fragment >
  )
}

const mapDispatch = {
  setFavorite,
  dropFavorites,
};

export default connect(null, mapDispatch)(Modals);