import { PureComponent } from 'react'
import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet'
import Button from '../Button';

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
        return enterprises.filter((enterprise, index) => index % 3 === 0);
      case 6:
        return enterprises.filter((enterprise, index) => index % 2 === 0);
      default:
        return enterprises;
    }
  }
);

class Map extends PureComponent {
  state = {
    map: null,
    zoom: 1,
    searchQuery: 'Патронное производство'
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

  setZoom = (mode) => {
    const { map, zoom } = this.state;
    const newZoom = mode === 'increase'
      ? zoom + 1
      : zoom - 1;
    map && map.setZoom(newZoom);
    this.setState({ zoom: newZoom });
  }

  increaseZoom = () => this.setZoom('increase');

  decreaseZoom = () => this.setZoom('decrease');

  onSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  }

  onServerSearch = (event) => {
    const { searchType } = this.props;
    const { searchQuery } = this.state;
    event.key === 'Enter' && searchQuery && searchType(searchQuery);
  };

  getMarkerEvents = (enterprise) => {
    const { enterprisesById, openModal } = this.props;
    return {
      click: () => {
        console.log(enterprisesById[enterprise.id]);
        openModal();
      },
    }
  };

  render() {
    const { center, enterprises, isSearchLoading } = this.props;
    const { zoom, searchQuery } = this.state;

    return (
      <div className="app-map" >
        <nav className="app-map-navbar">
          <input
            className='app-map-navbar-search'
            value={searchQuery}
            onChange={this.onSearch}
            onKeyPress={this.onServerSearch}
            placeholder="Тематика"
            disabled={isSearchLoading}
          />
          <div className="app-map-navbar-zoom-buttons">
            <span className="app-map-navbar-zoom-title">{`Zoom: ${zoom}`}</span>
            <Button
              className="app-map-navbar-zoom-button increase"
              onClick={this.increaseZoom}
            >
              Increase zoom level
          </Button>
            <Button
              className="app-map-navbar-zoom-button decrease"
              onClick={this.decreaseZoom}
            >
              Decrease zoom level
          </Button>
          </div>
        </nav>
        <MapContainer
          id="map-container"
          center={center}
          minZoom={1}
          zoom={zoom}
          maxZoom={8}
          zoomControl={false}
          whenCreated={this.setMap}
        >
          <TileLayer
            url='http://localhost:8080/russia-1-8/{z}/{x}/{y}.png'
          />
          {zoom > 3 && getMarkers(enterprises, zoom).map(enterprise =>
            <Marker
              key={enterprise.id}
              icon={getIcon()}
              position={[
                +enterprise.dadata.geo_lat,
                +enterprise.dadata.geo_lon
              ]}
              eventHandlers={this.getMarkerEvents(enterprise)}
            />)}
          <ZoomControl
            position="bottomright"
          />
        </MapContainer>
      </div >
    )
  }
}

export default Map;