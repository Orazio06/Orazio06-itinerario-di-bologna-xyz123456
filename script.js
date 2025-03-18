// Funzione per inizializzare le mappe
function initMaps() {
  const maps = [
    {
      id: 'map-giorno1',
      center: [44.4949, 11.3426], // Coordinate di Bologna
      zoom: 14,
      marker: {
        position: [44.4949, 11.3426],
        title: 'Università di Bologna'
      }
    },
    {
      id: 'map-giorno2',
      center: [44.4949, 11.3426],
      zoom: 14,
      marker: {
        position: [44.4949, 11.3426],
        title: 'Museo Memoriale della Libertà'
      }
    },
    {
      id: 'map-giorno3',
      center: [44.4949, 11.3426],
      zoom: 14,
      marker: {
        position: [44.4949, 11.3426],
        title: 'Casa Saraceni'
      }
    }
  ];

  // Inizializza le mappe
  maps.forEach(mapConfig => {
    const mapElement = document.getElementById(mapConfig.id);
    if (mapElement && !mapElement._map) { // Evita di inizializzare la mappa più volte
      const map = L.map(mapElement).setView(mapConfig.center, mapConfig.zoom);

      // Aggiungi il layer di OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Aggiungi un marcatore
      L.marker(mapConfig.marker.position).addTo(map)
        .bindPopup(mapConfig.marker.title)
        .openPopup();

      mapElement._map = map; // Memorizza la mappa per evitare ri-inizializzazioni
    }
  });
}

// Inizializza le mappe al caricamento della pagina
document.addEventListener('DOMContentLoaded', initMaps);