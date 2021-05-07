import React, { PureComponent } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import Map from '../components/Map';
import Modal from '../components/Modal';
import Charts from './Charts';
import './index.scss';

import { connect } from 'react-redux';
import { setLoading } from '../store/enterprises/get/actions';
import { searchType } from '../store/enterprises/search/actions';

class App extends PureComponent {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
  }

  openModal = () => this.setState({ isVisible: true });

  closeModal = () => this.setState({ isVisible: false });

  render() {
    const {
      isLoading,
      enterprises,
      isSearchLoading,
      searchType,
    } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="app">
        {{
          null: null,
          true: <LoadingScreen />,
          false: <React.Fragment>
            <Map
              openModal={this.openModal}
              enterprises={enterprises}
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
      enterprises
    },
    search: {
      isSearchLoading,
    }
  }
}) => ({
  isLoading,
  enterprises,
  isSearchLoading,
});
const mapDispatch = (dispatch) => ({
  setLoading: isLoading => dispatch(setLoading(isLoading)),
  searchType: searchQuery => dispatch(searchType(searchQuery)),
});

export default connect(mapState, mapDispatch)(App);