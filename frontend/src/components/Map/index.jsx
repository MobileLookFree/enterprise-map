import { useState, useEffect, useMemo, useCallback } from 'react'
import Button from '../Button';
// map interactions
import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet'
import L from 'leaflet';

import markerIcon from '../../assets/icons/marker.svg';
import './index.scss';

import { createSelector } from 'reselect';

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

const icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [16, 16],
  iconAnchor: [8, 16],
});

const center = [55.752017, 37.618331];

const Map = ({
  openModal,
  enterprises,
  isSearchLoading,
  searchType,
}) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoomHandler] = useState(1);
  const [searchQuery, setSearchQuery] = useState('Патронное производство');

  const onMove = useCallback(() => {
    map && setZoomHandler(map.getZoom());
  }, [map])

  const increaseZoom = useCallback(() => {
    map && map.setZoom(zoom + 1);
    setZoomHandler(zoom + 1);
  }, [map, zoom]);

  const decreaseZoom = useCallback(() => {
    map && map.setZoom(zoom - 1);
    setZoomHandler(zoom - 1);
  }, [map, zoom]);

  const onSearch = useCallback((event) => {
    const { value } = event.target;
    setSearchQuery(value);
  }, [setSearchQuery]);

  const onServerSearch = (event) => {
    event.key === 'Enter' && searchQuery &&
      searchType(searchQuery);
  }

  useEffect(() => {
    map && map.on('move', onMove);
    return () => {
      map && map.off('move', onMove);
    }
  }, [map, onMove]);

  const markerEventHandlets = useMemo(() => ({
    click: openModal,
  }), [openModal]);

  return (
    <div className="app-map">
      <nav className="app-map-navbar">
        <input
          className='app-map-navbar-search'
          value={searchQuery}
          onChange={onSearch}
          onKeyPress={onServerSearch}
          placeholder="Тематика"
          disabled={isSearchLoading}
        />
        <div className="app-map-navbar-zoom-buttons">
          <span className="app-map-navbar-zoom-title">{`Zoom: ${zoom}`}</span>
          <Button
            className="app-map-navbar-zoom-button increase"
            onClick={increaseZoom}
          >
            Increase zoom level
          </Button>
          <Button
            className="app-map-navbar-zoom-button decrease"
            onClick={decreaseZoom}
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
        whenCreated={setMap}
      >
        <TileLayer
          url='http://localhost:8080/russia-1-8/{z}/{x}/{y}.png'
        />
        {zoom > 3 && getMarkers(enterprises, zoom).map(enterprise =>
          <Marker
            key={enterprise.id}
            icon={icon}
            position={[
              +enterprise.dadata.geo_lat,
              +enterprise.dadata.geo_lon
            ]}
            eventHandlers={markerEventHandlets}
          />)}
        <ZoomControl
          position="bottomright"
        />
      </MapContainer>
    </div>)
}

export default Map;

