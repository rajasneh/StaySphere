let mapKey =mapKeyEjs; 
Coordinates=[listingsCoordinates[1],listingsCoordinates[0]];
// Initialize the map and set its view dynamically
const map = L.map('map').setView(Coordinates, 9);

// Add MapTiler tiles
L.tileLayer(`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapKey}`, {
    attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
}).addTo(map);

console.log(Coordinates);

// Add a marker at the dynamic center coordinates with a custom icon
L.marker(Coordinates).addTo(map)
    .bindPopup('Hello from Jamshedpur')
    .openPopup();