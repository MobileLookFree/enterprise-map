import React, { PureComponent } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import Map from '../components/Map';
import Modal from '../components/Modal';
import Charts from './Charts';
import './index.scss';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
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
      error,
      enterprises,
      isSearchLoading,
      searchType,
    } = this.props;
    const { isVisible } = this.state;

    console.log(error)

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
      error,
      enterprises
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
  setLoading,
  searchType,
};
// const mapDispatch = (dispatch) => bindActionCreators({
//   setLoading: isLoading => setLoading(isLoading),
//   searchType: searchQuery => searchType(searchQuery),
// }, dispatch);

export default connect(mapState, mapDispatch)(App);