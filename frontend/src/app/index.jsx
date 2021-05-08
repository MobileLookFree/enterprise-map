import React, { PureComponent } from 'react'
import LoadingScreen from 'components/LoadingScreen';
import Map from 'components/Map';
import Modal from 'components/Modal';
import Charts from './Charts';
import './index.scss';

import { connect } from 'react-redux';
import { startLoading } from 'store/enterprises/get/actions';
import { searchType } from 'store/enterprises/search/actions';

import { MAP_CENTER } from './const';

class App extends PureComponent {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    const { startLoading } = this.props;
    startLoading();
  }

  openModal = () => this.setState({ isVisible: true });

  closeModal = () => this.setState({ isVisible: false });

  render() {
    const {
      isLoading,
      error,
      enterprises,
      enterprisesById,
      isSearchLoading,
      searchType,
    } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="app">
        {{
          null: null,
          true: <LoadingScreen />,
          false: error
            ? <LoadingScreen mode='error' />
            : <React.Fragment>
              <Map
                center={MAP_CENTER}
                openModal={this.openModal}
                enterprises={enterprises}
                enterprisesById={enterprisesById}
                isSearchLoading={isSearchLoading}
                searchType={searchType}
              />
              <Modal
                className="app-map-modal"
                title="Статистика"
                visible={isVisible}
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
      enterprisesById
    },
    search: {
      isSearchLoading,
    }
  }
}) => ({
  isLoading,
  error,
  enterprises,
  enterprisesById,
  isSearchLoading,
});
const mapDispatch = {
  startLoading,
  searchType,
};

export default connect(mapState, mapDispatch)(App);