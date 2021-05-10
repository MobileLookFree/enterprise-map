import React, { PureComponent } from 'react'
import { Layout } from 'antd';
import LoadingScreen from 'components/LoadingScreen';
import SideMenu from 'components/SideMenu';
import Map from 'components/Map';
import Modal from 'components/Modal';
import Charts from './Charts';
import './index.scss';

import { connect } from 'react-redux';
import { startLoading } from 'store/enterprises/get/actions';
import { searchType } from 'store/enterprises/search/actions';

import { MAP_CENTER, ZOOM_THRESHOLD } from './const';

class App extends PureComponent {
  state = {
    isSideMenuCollapsed: true,
    isModalVisible: false,
    openedEnterprise: {}
  }

  componentDidMount() {
    const { startLoading } = this.props;
    startLoading();
  }

  openModal = (openedEnterprise = {}) => this.setState({
    isModalVisible: true,
    openedEnterprise
  });

  closeModal = () => this.setState({
    isModalVisible: false,
    openedEnterprise: {}
  });

  setSideMenuCollapsed= () =>
    this.setState(prevState => ({ isSideMenuCollapsed: !prevState.isSideMenuCollapsed }));

  render() {
    const {
      isLoading,
      error,
      enterprises,
      isSearchLoading,
      searchType,
    } = this.props;
    const { isSideMenuCollapsed, isModalVisible, openedEnterprise } = this.state;

    return (
      <div className='app'>
        {{
          null: null,
          true: <LoadingScreen />,
          false: error
            ? <LoadingScreen mode='error' />
            : <React.Fragment>
              <Layout>
                <SideMenu collapsed={isSideMenuCollapsed}/>
                <Map
                  center={MAP_CENTER}
                  zoomThreshold={ZOOM_THRESHOLD}
                  isSideMenuCollapsed={isSideMenuCollapsed}
                  setSideMenuCollapsed={this.setSideMenuCollapsed}
                  openModal={this.openModal}
                  // redux
                  enterprises={enterprises}
                  isSearchLoading={isSearchLoading}
                  searchType={searchType}
                />
              </Layout>
              <Modal
                className='app-ui-map-modal'
                title={openedEnterprise.fullName || 'Предприятие'}
                visible={isModalVisible}
                onCancel={this.closeModal}
                destroyOnClose
              >
                <Charts />
              </Modal>
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
    }
  }
}) => ({
  isLoading,
  error,
  enterprises,
  isSearchLoading,
});
const mapDispatch = {
  startLoading,
  searchType,
};

export default connect(mapState, mapDispatch)(App);