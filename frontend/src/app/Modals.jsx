import React from 'react'
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import { FavoriteButton } from 'components/Detailing';
import Settings from 'components/Settings';
import Filters from 'components/Filters';
import Charts from './Charts';

import { setFavorite, dropFavorites } from 'store/enterprises/favorites/actions';

const Modals = ({
  openedEnterprise,
  isDetailsVisible,
  closeDetails,
  isSettingsVisible,
  closeSettings,
  isFiltersVisible,
  closeFilters,
  filters,
  setFilters,
  dropFilters,
  // redux      
  branches,
  subbranches,
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
        controlsBefore={<FavoriteButton
          openedEnterprise={openedEnterprise}
          favorites={favorites}
          setFavorite={setFavorite}
        />}
      >
        <Charts openedEnterprise={openedEnterprise} />
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
      <Modal
        className='app-ui-filters-modal'
        title='Фильтры'
        visible={isFiltersVisible}
        onCancel={closeFilters}
        destroyOnClose
      >
        <Filters
          branches={branches}
          subbranches={subbranches}
          filters={filters}
          setFilters={setFilters}
          dropFilters={dropFilters}
        />
      </Modal>
    </React.Fragment >
  )
}

const mapState = ({
  enterprises: {
    get: {
      branches,
      subbranches,
    },
  }
}) => ({
  branches,
  subbranches,
});
const mapDispatch = {
  setFavorite,
  dropFavorites,
};

export default connect(mapState, mapDispatch)(Modals);