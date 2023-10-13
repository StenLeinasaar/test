
// Creating my map 
var map = L.map('map');

// Define coordinates for the corners
var corner1 = L.latLng(61.219668, 4.713895),
    corner2 = L.latLng(61.415322, 29.782314),
    corner3 = L.latLng(53.464436, 26.754715),
    corner4 = L.latLng(53.653014, 6.742718);

// Calculate the bounds from the corners
var bounds = L.latLngBounds(corner1, corner2).extend(corner3).extend(corner4);

// Set the map view to fit the specified bounds
map.fitBounds(bounds);

// OSM layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// Create circles with popups for Tallinn, Stockholm, Helsinki, and Gdansk
var tallinnCircle = L.circle([59.4370, 24.7536], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

var stockholmCircle = L.circle([59.3293, 18.0686], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map);

var helsinkiCircle = L.circle([60.1699, 24.9384], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map);

var gdanskCircle = L.circle([54.3520, 18.6466], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map);

// Define the popup content for Tallinn
var tallinnPopupContent = "<b>Tallinn</b><br>Population: 454,245<br>Area: 159.2 km²";
tallinnCircle.bindPopup(tallinnPopupContent);

// Define the popup content for Stockholm
var stockholmPopupContent = "<b>Stockholm</b><br>Population: 1.6 million<br>Area: 381.6 km²";
stockholmCircle.bindPopup(stockholmPopupContent);

// Define the popup content for Helsinki
var helsinkiPopupContent = "<b>Helsinki</b><br>Population: 1.3 million<br>Area: 715.5 km²";
helsinkiCircle.bindPopup(helsinkiPopupContent);

// Define the popup content for Gdansk
var gdanskPopupContent = "<b>Gdansk</b><br>Population: 471,000<br>Area: 683 km²";
gdanskCircle.bindPopup(gdanskPopupContent);

// Create a polyline (arrow) connecting Saaremaa and Gotland
var arrowPoints = [
    [58.251052, 21.910311], // Saaremaa
    [57.815995, 19.095263]  // Gotland
];

var arrowPolyline = L.polyline(arrowPoints, {
    color: 'red',
    weight: 2
}).arrowheads({
    yawn: 40,
    fill: true
  }).addTo(map);


// Create an arrowhead for the Gotland side
triangle = L.marker(arrowPoints[1], {
    icon: L.divIcon({
        className: 'arrowhead-icon',
        iconSize: [5, 5],
        iconAnchor: [8, 5,5], // Adjust the iconAnchor to move the triangle to the center
        html: '<div style="width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 10px solid red;"></div>'
    })
}).addTo(map);


// Define the popup content for the connecting arrow
var arrowPopupContent = `
<b>Joon 1</b><br>
<br> <!-- Extra space here -->
See joon ühendab Saaremaad ja Götlandi.<br>
<br> <!-- Extra space here -->
<a href="https://kogumelugu.ee/" target="_blank">Eesti Mäluinstituut</a><br>
<br> <!-- Extra space here -->
<img src="https://www.vohandumaraton.ee/wp-content/uploads/2017/12/estonia-flag-button-square-icon-256.png">
`;

arrowPolyline.bindPopup(arrowPopupContent);

// Define the popup content for the arrowhead
var arrowheadPopupContent = `
<b>Joon 1</b><br>
<br> <!-- Extra space here -->
See joon ühendab Saaremaad ja Götlandi.<br>
<br> <!-- Extra space here -->
<a href="https://kogumelugu.ee/" target="_blank">Eesti Mäluinstituut</a><br>
<br> <!-- Extra space here -->
<img src="https://www.vohandumaraton.ee/wp-content/uploads/2017/12/estonia-flag-button-square-icon-256.png">
`;


triangle.bindPopup(arrowheadPopupContent);