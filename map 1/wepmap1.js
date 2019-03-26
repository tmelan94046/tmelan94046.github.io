let renameThis = L.map('renameThis').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(renameThis)
let renameThis = L.marker([30, -90]).addTo(renameThis)
let renameThis = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(renameThis)
renameThis.bindPopup('A polygon')
renameThis.bindPopup('A marker')
