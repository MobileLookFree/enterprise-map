import React, {  useState, useEffect, useCallback } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet'

import markerIcon from '../assets/icons/marker.svg'
import './map.scss';

const icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const basePositions = [55.752017, 37.618331]; // kremlin

const Map = () => {
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
    map && map.on('move', onMove)
    return () => {
      map && map.off('move', onMove)
    }
  }, [map, onMove]);

  return (
    <div className="app-map">
      <nav className="app-map-navbar">
        <span className="app-map-navbar-zoom-title">{`Zoom: ${zoom}`}</span>
        <div>
          <button
            className="app-map-navbar-zoom-button increase"
            onClick={increaseZoom}
          >
            Increase zoom level
        </button>
          <button
            className="app-map-navbar-zoom-button decrease"
            onClick={decreaseZoom}
          >
            Decrease zoom level
        </button>
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
          url='http://localhost:8080/control-room/{z}/{x}/{y}.png'
        />
        {zoom < 16 && <Marker
          icon={icon}
          position={basePositions}
          eventHandlers={{
            click: () => alert('Oh, Kremlin'),
          }}
        />}
        <ZoomControl
          position="bottomright"
        />
      </MapContainer>
    </div>
  )
}

export default Map;

