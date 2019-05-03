let myMap = L.map('TecheMap3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(myMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(stateMap)
})
let stateStyle = function (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateColor = 'olive' // let the initial color be a darker green
  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
let stateGeojsonOptions = {
style: stateStyle,
onEachFeature: onEachFeature
}
L.geoJSON(data, stateGeojsonOptions).addTo(stateMap)
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
  let age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
