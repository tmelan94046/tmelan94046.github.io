let myMap = L.map('TecheMap3').setView([30.44, -91.188], 10)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(myMap)
let facilitylocations = 'https://opendata.arcgis.com/datasets/f14b547d30124f37821aa111efa46b72_0.geojson'

jQuery.getJSON(facilitylocations, function (data) {
  let facilitystyle = function (feature) {
    let Agency = feature.properties. AGENCY // agency of the public facility
    let facilitycolor = 'blue' // let the initial color be a darker green
    if ( Agency == DEPARTMENT OF ENVIRONMENTAL SERVICES ) { facilitycolor = 'green' }
    return {
      color: facilitycolor, //use the color variable above for the value
      weight: 1,
      fillOpacity: 0.2
    }
  }

  let facilitygeojsonoptions = {
    style: facilitystyle,
    onEachFeature: createpopup
  }

  L.geoJSON(data, facilitygeojsonoptions).addTo(myMap)
})

let createpopup = function (feature, layer) {
  let name = feature.properties.STATE_NAME
  let age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
