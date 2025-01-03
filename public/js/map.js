
    document.addEventListener("DOMContentLoaded", function() {
        let mapKey = mapKeyEjs; 
Coordinates = [listing.geometry.coordinates[1], listing.geometry.coordinates[0]]; // Swap if needed for long,lat

// Initialize the map and set its view dynamically to the Coordinates
const map = L.map('map').setView(Coordinates, 9); // Use Coordinates to center the map

// Add MapTiler tiles
L.tileLayer(`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${mapKey}`, {
    attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
}).addTo(map);

console.log(Coordinates);

// Add a marker at the dynamic center coordinates
L.marker(Coordinates).addTo(map)
    .bindPopup(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`)
    .openPopup()

    });
    