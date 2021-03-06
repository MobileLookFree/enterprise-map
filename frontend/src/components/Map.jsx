import React, { useState, useEffect, useCallback } from 'react'
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
  const [zoom, setZoom] = useState(14);

  const onMove = useCallback(() => {
    map && setZoom(map.getZoom());
  }, [map])

  useEffect(() => {
    map && map.on('move', onMove)
    return () => {
      map && map.off('move', onMove)
    }
  }, [map, onMove]);

  return (
    <MapContainer
      id="map-container"
      center={basePositions}
      minZoom={12}
      zoom={zoom}
      maxZoom={16}
      zoomControl={false}
      whenCreated={setMap}
    >
      <TileLayer
        url='http://localhost:8080/{z}/{x}/{y}.png'
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
  )
}

export default Map;