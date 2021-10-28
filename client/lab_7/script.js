/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
// Leaflet Map
const mymap = L.map('mapid').setView([38.9897, -76.9378], 11);

function mapInit() {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1IjoiY29sZWJhcnIiLCJhIjoiY2t2NjNiM2hsMjV2dzMxcTFjaW4zampyNyJ9.CuMcJqhM66w4wd3Dgyu76g'
    }
  ).addTo(mymap);
}
mapInit();

async function dataHandler() {
  console.log('loaded main script');
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const inputBox = document.querySelector('#zipcode');
  const visibleListOfFilteredItems = document.querySelector('.append-box');
  const ACCESSTOKEN = 'pk.eyJ1IjoiY29sZWJhcnIiLCJhIjoiY2t2NjNiM2hsMjV2dzMxcTFjaW4zampyNyJ9.CuMcJqhM66w4wd3Dgyu76g';
  const request = await fetch(endpoint);
  const dest = await request.json();

  // eslint-disable-next-line no-shadow
  function findMatches(wordToMatch, dest) {
    return dest.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.zip.match(regex);
    });
  }

  function displayMatches(event) {
    let matchArray = []
    matchArray = findMatches(event.target.value, dest);
    matchArray = matchArray.slice(0, 5)
    const html = matchArray.map((place) => `
        <ul>
        <div class ="box is-primary">
        <li><div class = "name"><strong>${place.name}</strong></div></li>
        <li><div class = "address"><em>${place.address_line_1}</em></div></li>
        </div>
        </ul>
        <br>
        `)
      .join('');
    // eslint-disable-next-line no-use-before-define
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.input');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  // eslint-disable-next-line block-spacing
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}

window.onload = dataHandler;
