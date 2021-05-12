import L from 'leaflet';
import markerIcon from 'assets/icons/marker.svg';
import selectedMarkerIcon from 'assets/icons/selected-marker.svg';
import favoriteMarkerIcon from 'assets/icons/favorite-marker.svg';

const getIcon = ({
  size = 24,
  selectedSize = 48,
  favorite,
  selected,
}) => {
  const icon = favorite
    ? favoriteMarkerIcon
    : selected
      ? selectedMarkerIcon
      : markerIcon;
  const iconSize = selected
    ? selectedSize
    : size;
  return L.icon({
    className: 'app-ui-map-marker',
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [iconSize, iconSize],
    iconAnchor: [iconSize / 2, 0],
  });
}

export default getIcon;