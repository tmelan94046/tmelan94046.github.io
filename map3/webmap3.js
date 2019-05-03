let myMap = L.map('TecheMap3').setView([30.44, -91.188], 10)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(myMap)
let facilitylocations = 'https://opendata.arcgis.com/datasets/f14b547d30124f37821aa111efa46b72_0.geojson'

jQuery.getJSON(facilitylocations, function (data) {

  L.geoJSON(data, facilitygeojsonoptions).addTo(myMap)
})


// add all of the GeoJSON data to the empty layer we created
let createCircles = function (feature, latlng) {
  let agency = feature.properties.AGENCY // agency of the public facility
  let facilitycolor = 'blue' // let the initial color be a blue
  //console.log('test')
  if ( agency == 'DEPARTMENT OF ENVIRONMENTAL SERVICES' ) { facilitycolor = 'green' }
  let facilitystyle = {
    color: facilitycolor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
  return L.circleMarker(latlng, facilitystyle)
}
let createpopup = function (feature, layer) {
  let name = feature.properties.DESCRIPTION
  let agency = feature.properties.AGENCY
  layer.bindPopup('Facility ' + name + ': ' + agency)
}
  let facilitygeojsonoptions = {
    onEachFeature: createpopup,
    pointToLayer: createCircles
  }
