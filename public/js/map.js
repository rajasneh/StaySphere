let mapKey =mapKeyEjs; 

// Default coordinates (example: Jamshedpur)
const coordinates = { lat: 22.805618, lng: 86.203110 };

// Initialize the map and set its view dynamically
const map = L.map('map').setView([coordinates.lat, coordinates.lng], 9);

// Add MapTiler tiles
L.tileLayer(`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapKey}`, {
    attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
}).addTo(map);

// Add a marker at the dynamic center coordinates
L.marker([coordinates.lat, coordinates.lng]).addTo(map)
    .bindPopup('Hello from Jamshedpur')
    .openPopup();