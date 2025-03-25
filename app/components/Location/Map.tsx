import './Map.css';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { useEffect } from 'react';

interface LeafletMapProps {
  coordinates: [number, number];
  addressInfo: {
    firstLine: string;
    secondLine: string;
    reference: string;
  };
}

export default function LeafletMap({ coordinates, addressInfo }: LeafletMapProps) {
  useEffect(() => {
    const map = L.map('map', {
      center: coordinates,
      zoom: 17,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: 'icon-maker',
    });

    let marker: L.Marker | null = null;

    function addMaker(coordenadas: [number, number]) {
      if (marker) {
        map.removeLayer(marker);
      }
      marker = L.marker(coordenadas, { icon: customIcon }).addTo(map);
    }

    addMaker(coordinates);

    return () => {
      map.remove();
    };
  }, [coordinates]);

  function handleOpenInGoogleMaps() {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=$${coordinates[0]},${coordinates[1]}`;
    window.open(googleMapsUrl, '_blank');
  }

  return (
    <div id='map' className='location-map-box' onClick={handleOpenInGoogleMaps}></div>
  );
}