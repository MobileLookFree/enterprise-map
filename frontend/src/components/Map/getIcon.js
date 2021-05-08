import L from 'leaflet';
import markerIcon from 'assets/icons/marker.svg';

const getIcon = (size = 16) =>
  L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });

export default getIcon;