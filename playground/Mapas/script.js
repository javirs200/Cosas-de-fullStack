//@40.4215449087015, -3.6926686128871475,19z coordenadas de thebridge en maps

// COORDENADAS LA 34.059868291155205, -118.26761173706329


let planeIcon = L.icon({
    iconUrl: './assets/plane.png',
    iconSize: [25, 25], // size of the icon
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor: [0,0] // point fr5om which the popup should open relative to the iconAnchor
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        console.log("Geolocation is not supported by this browser.");;
    }
}



const baseURL = 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary?';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a80124b517mshda7b86570e21e92p17fc41jsnf7d2c2431c56',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

function getApiUrl(location) {
    return baseURL + `bl_lat=${location.x-1}&bl_lng=${location.y-1}&tr_lat=${location.x+1}&tr_lng=${location.y+1}&limit=300`
}

async function ej1(position) {
    let location = { x: position.coords.latitude, y: position.coords.longitude }

    let map = L.map('map').setView([location.x, location.y], 10);

    await L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([location.x, location.y]).addTo(map);

   /* L.polygon([

        [location.x-1, location.y-1],
        
        [location.x+1, location.y+1],
        
    ]).addTo(map);

    L.polygon([

        [13.607884, 100.641975],
        
        [13.771029, 100.861566],
        
    ]).addTo(map);*/

    let layerGroup = L.layerGroup().addTo(map);

    addTransport(layerGroup,location)
    //bucle(layerGroup)
}

async function addTransport(layerGroup,location) {

    let response = await fetch(getApiUrl(location),options);
    let planes = await response.json();

    console.log(planes.aircraft);

    let viones = planes.aircraft

    layerGroup.clearLayers();

    for (const plane of viones) {
        L.marker([plane[2], plane[3]], { icon: planeIcon }).bindPopup(plane[1]).addTo(layerGroup);
    }

}

function bucle(layerGroup) {
    setInterval(addTransport, 3000, layerGroup)
}

function showPosition(position) {
    ej1(position)
}

getLocation()






