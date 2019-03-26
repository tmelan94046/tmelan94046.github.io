let myMap = L.map('TecheMap1').setView([32.18, -99.14], 4)
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let marker=L.marker([30.411912, -91.183643]).addTo(myMap)
let polygon=L.polygon([
  [30.417498, -91.180412],
  [30.415118, -91.194672],
  [30.406646, -91.197980],
  [30.406463, -91.175479]
]).addTo(myMap)
polygon.bindPopup('A polygon')
marker.bindPopup('A marker')
// create a red polyline from an array of LatLng points
var latlngs = [
    [30.437070, -91.1858988],
    [30.418114, -91.176566],
    [30.409042, -91.176046],
    [30.410637, -91.183431]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);
// zoom the map to the polylin
map.fitBounds(polyline.getBounds());
