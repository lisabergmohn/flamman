import { popUpspots } from "./popspots.js";


export async function fetchFire() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const fireUrl = 'https://grillplatser.nu/manifest.json';

    try {
        const response = await fetch(proxyUrl + fireUrl);
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        const data = await response.json();
        const startUrl = data.start_url;
        getFire(startUrl);

    } catch (error) {
        console.error('Error fetching data: ', error);

    }

}

/* get data from grillplatser.nu */
function getFire(startUrl) {
    const anchor = document.createElement('a');
    anchor.href = startUrl + '/Grillplats/Visa/';
  
    getMap(anchor);

}


/* using leaflet library for map and popups */
function getMap(anchor) {
   
    /* ((Coordinates targeting Gothenburg z, x), zoom level y) */
    let map = L.map('map').setView([57.708870, 11.974560], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    popUpspots(map, anchor);
}


