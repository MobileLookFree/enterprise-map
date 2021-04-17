import { useState, useEffect, useMemo, useCallback } from 'react'
import Button from '../Button';
// map interactions
import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet'
import L from 'leaflet';

import markerIcon from '../../assets/icons/marker.svg';
import './index.scss';

const icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const basePositions = [55.752017, 37.618331]
// [55.752017, 37.618331]; // kremlin

const Map = ({ openModal }) => {
  const [map, setMap] = useState(null);
  const [zoom, setZoomHandler] = useState(1);

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
        <span className="app-map-navbar-zoom-title">{`Zoom: ${zoom}`}</span>
        <div className="app-map-navbar-zoom-buttons">
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
        center={basePositions}
        minZoom={1}
        zoom={zoom}
        maxZoom={15}
        zoomControl={false}
        whenCreated={setMap}
      >
        <TileLayer
          url='http://localhost:8080/russia-1-8/{z}/{x}/{y}.png'
        />
        {zoom < 16 && <Marker
          icon={icon}
          position={basePositions}
          eventHandlers={markerEventHandlets}
        />}
        <ZoomControl
          position="bottomright"
        />
      </MapContainer>
    </div>)
}

export default Map;

