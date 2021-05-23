import React, { PureComponent } from 'react'
import { Layout } from 'antd';
import LoadingScreen from 'components/LoadingScreen';
import SideMenu from 'components/SideMenu';
import Map from 'components/Map';
import Modals from './Modals';
import './index.scss';

import { connect } from 'react-redux';
import { startLoading } from 'store/enterprises/get/actions';
import { searchType } from 'store/enterprises/search/actions';
import { startDownloading } from 'store/enterprises/download/actions';
import { loadFavorites } from 'store/enterprises/favorites/actions';

import { MAP_CENTER, ZOOM_THRESHOLD } from './const';

class App extends PureComponent {
  state = {
    isSideMenuCollapsed: true,
    isFavoritesView: false,
    isDetailsVisible: false,
    isSettingsVisible: false,
    isFiltersVisible: false,
    filters: {},
    openedEnterprise: {}
  }

  componentDidMount() {
    const { startLoading, loadFavorites } = this.props;
    startLoading();
    loadFavorites();
  }

  openDetails = (openedEnterprise = {}) => this.setState({
    isDetailsVisible: true,
    openedEnterprise
  });

  closeDetails = () => this.setState({
    isDetailsVisible: false,
    openedEnterprise: {}
  });

  setSideMenuCollapsed= () =>
    this.setState(prevState => ({ isSideMenuCollapsed: !prevState.isSideMenuCollapsed }));
  
  setFavoritesView = (isFavoritesView) =>
    this.setState({ isFavoritesView });
  
  openSettings = () =>
    this.setState({ isSettingsVisible: true });
  
  closeSettings = () =>
    this.setState({ isSettingsVisible: false });
  
  openFilters = () =>
    this.setState({ isFiltersVisible: true });
  
  closeFilters = () =>
    this.setState({ isFiltersVisible: false });
  
  setFilters = (filter, filterKey) => {
    const { filters } = this.state;
    const newFilters = { ...filters };

    if (!newFilters[filterKey]) {
      newFilters[filterKey] = [filter];
    } else {
      if (newFilters[filterKey].includes(filter)) {
        newFilters[filterKey] = newFilters[filterKey].filter(element => element !== filter);
        !newFilters[filterKey].length && delete newFilters[filterKey];
      } else {
        newFilters[filterKey].push(filter);
      }
    }
    this.setState({ filters: newFilters });
  }

  dropFilters = (filterKey) => {
    const { filters } = this.state;
    const newFilters = { ...filters };
    delete newFilters[filterKey];
    this.setState({ filters: newFilters });
  }

  render() {
    const {
      isLoading,
      error,
      enterprises,
      favorites,
      isSearchLoading,
      searchType,
      startDownloading,
    } = this.props;
    const {
      isSideMenuCollapsed,
      isFavoritesView,
      isSettingsVisible,
      isDetailsVisible,
      isFiltersVisible,
      filters,
      openedEnterprise
    } = this.state;

    return (
      <div className='app'>
        {{
          null: null,
          true: <LoadingScreen />,
          false: error
            ? <LoadingScreen mode='error' />
            : <React.Fragment>
              <Layout>
                <SideMenu
                  collapsed={isSideMenuCollapsed}
                  setFavoritesView={this.setFavoritesView}
                  openSettings={this.openSettings}
                  favorites={favorites}
                  startDownloading={startDownloading}
                />
                <Map
                  center={MAP_CENTER}
                  zoomThreshold={ZOOM_THRESHOLD}
                  isFavoritesView={isFavoritesView}
                  setSideMenuCollapsed={this.setSideMenuCollapsed}
                  openDetails={this.openDetails}
                  openFilters={this.openFilters}
                  filters={filters}
                  // redux
                  enterprises={enterprises}
                  favorites={favorites}
                  isSearchLoading={isSearchLoading}
                  searchType={searchType}
                />
              </Layout>
              <Modals
                openedEnterprise={openedEnterprise}
                isDetailsVisible={isDetailsVisible}
                closeDetails={this.closeDetails}
                isSettingsVisible={isSettingsVisible}
                closeSettings={this.closeSettings}
                isFiltersVisible={isFiltersVisible}
                closeFilters={this.closeFilters}
                filters={filters}
                setFilters={this.setFilters}
                dropFilters={this.dropFilters}
                //redux
                favorites={favorites}
              />
            </React.Fragment>
        }[isLoading]}
      </div>
    )
  }
}

const mapState = ({
  enterprises: {
    get: {
      isLoading,
      error,
      enterprises,
    },
    search: {
      isSearchLoading,
    },
    favorites: {
      favorites
    }
  }
}) => ({
  isLoading,
  error,
  enterprises,
  isSearchLoading,
  favorites,
});
const mapDispatch = {
  startLoading,
  searchType,
  startDownloading,
  loadFavorites,
};

export default connect(mapState, mapDispatch)(App);