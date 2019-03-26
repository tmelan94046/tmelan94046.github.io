let myMap = L.map('TecheMap1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
let marker=L.marker([30.411912, -91.183643]).addTo(myMap)
let polygon=L.polygon([
  [30.417498, -91.180412],
  [30.415118, -91.194672],
  [30.406646, -91.197980],
  [30.406463, -91.175479]
]).addTo(myMap)
polygon.bindPopup('A polygon')
marker.bindPopup('A marker')
