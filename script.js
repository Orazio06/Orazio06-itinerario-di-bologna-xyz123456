function initMaps() {
  const maps = [
    {
      id: 'map-giorno1',
      center: [44.4949, 11.3426],
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
      markers: [
        {
          position: [44.4946, 11.3422],
          title: 'Biblioteca Salaborsa'
        },
        {
          position: [44.4965, 11.3408],
          title: 'Palazzina Majani'
        }
      ]
    }
  ];

  maps.forEach(mapConfig => {
    const mapElement = document.getElementById(mapConfig.id);
    if (mapElement && !mapElement._map) {
      const map = L.map(mapElement).setView(mapConfig.center, mapConfig.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      if (mapConfig.markers) {
        mapConfig.markers.forEach(markerConfig => {
          L.marker(markerConfig.position).addTo(map)
            .bindPopup(markerConfig.title);
        });
      } else {
        L.marker(mapConfig.marker.position).addTo(map)
          .bindPopup(mapConfig.marker.title);
      }

      mapElement._map = map;
    }
  });
}

document.addEventListener('DOMContentLoaded', initMaps);