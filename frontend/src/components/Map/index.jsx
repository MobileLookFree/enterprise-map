import { PureComponent } from 'react';
import { Layout } from 'antd';
import { MapContainer, TileLayer, ZoomControl, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import NavBar from 'components/Navbar';

import './index.scss';

import { createSelector } from 'reselect';
import getIcon from './getIcon';

const getMarkers = createSelector(
  (enterprises) => enterprises,
  (enterprises, zoom) => zoom,
  (enterprises, zoom) => {
    switch (zoom) {
      case 4:
      case 5:
      case 6:
        return enterprises.filter((enterprise, index) => index % 5 === 0);
      case 7:
        return enterprises.filter((enterprise, index) => index % 3 === 0);
      case 8:
        return enterprises.filter((enterprise, index) => index % 2 === 0);
      default:
        return enterprises;
    }
  }
);

const getEnterpriseCoords = createSelector(
  (enterprise) => enterprise,
  (enterprise) => [enterprise.lat, enterprise.lon]
);

const getEnterpriseMarker = createSelector(
  (enterprise) => enterprise,
  (enterprise, { selectedEnterpriseId }) => selectedEnterpriseId,
  (enterprise, selectedEnterpriseId) => getIcon({
    selected: enterprise.id === selectedEnterpriseId
  })
);

class Map extends PureComponent {
  state = {
    map: null,
    zoom: 1,
    selectedEnterpriseId: null
  }

  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    map && !prevState.map && map.on('move', this.onMapMove);
  }

  componentWillUnmount() {
    const { map } = this.state;
    map && map.off('move', this.onMapMove);
  }

  setMap = (map) => this.setState({ map });

  onMapMove = () => {
    const { map } = this.state;
    map && this.setState({ zoom: map.getZoom() });
  };

  getMarkerEvents = (enterprise) => {
    const { openModal } = this.props;
    return {
      click: () => openModal(enterprise),
    }
  };

  selectEnterprise = (enterprise = {}) => {
    const { map } = this.state;
    const { id, lat, lon } = enterprise;
    this.setState({ selectedEnterpriseId: id || null });
    id && map && map.setView(new L.LatLng(lat, lon), 9, { animate: true });
  };

  render() {
    const {
      center,
      zoomThreshold,
      setSideMenuCollapsed,
      // redux
      enterprises,
      isSearchLoading,
      searchType
    } = this.props;
    const { zoom } = this.state;
    const markers = getMarkers(enterprises, zoom);

    return (
      <Layout className='app-ui-map'>
        <NavBar
          zoomThreshold={zoomThreshold}
          setSideMenuCollapsed={setSideMenuCollapsed}
          zoom={zoom}
          selectEnterprise={this.selectEnterprise}
          // redux
          enterprises={enterprises}
          isSearchLoading={isSearchLoading}
          searchType={searchType}
        />
        <MapContainer
          id='map-container'
          center={center}
          minZoom={1}
          zoom={zoom}
          maxZoom={9}
          zoomControl={false}
          whenCreated={this.setMap}
        >
          <TileLayer url='/api/map/russia-1-9/{z}/{x}/{y}.png' />
          {zoom > zoomThreshold && markers.map(enterprise =>
            <Marker
              key={enterprise.id}
              icon={getEnterpriseMarker(enterprise, this.state)}
              position={getEnterpriseCoords(enterprise)}
              eventHandlers={this.getMarkerEvents(enterprise)}
            >
              <Tooltip>
                {enterprise.name}
              </Tooltip>
            </Marker>)}
          <ZoomControl
            position='bottomright'
          />
        </MapContainer>
      </Layout >
    )
  }
}

export default Map;