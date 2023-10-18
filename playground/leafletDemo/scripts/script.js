//@40.4215449087015, -3.6926686128871475,19z

let theBridgeLocation = {x:40.4215449087015, y: -3.6926686128871475}

var map = L.map('map').setView([theBridgeLocation.x, theBridgeLocation.y], 19);

/*L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/


let Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

Stadia_AlidadeSmoothDark.addTo(map);

var marker = L.marker([theBridgeLocation.x, theBridgeLocation.y]).addTo(map);


var circle = L.circle([theBridgeLocation.x, theBridgeLocation.y], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 50
}).addTo(map);

var polygon = L.polygon([

    [theBridgeLocation.x-0.001, theBridgeLocation.y-0.001],

    [theBridgeLocation.x+0.001, theBridgeLocation.y-0.001],

    [theBridgeLocation.x+0.001, theBridgeLocation.y+0.001],

    [theBridgeLocation.x-0.001, theBridgeLocation.y+0.001],
    
]).addTo(map);