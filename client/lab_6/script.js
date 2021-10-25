/* eslint-disable arrow-parens */
/* eslint-disable semi */
async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

  const request = await fetch(endpoint)
  const dest = await request.json()

  // eslint-disable-next-line no-shadow
  function findMatches(wordToMatch, dest) {
    return dest.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.name.match(regex) || place.category.match(regex)
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, dest);
    const html = matchArray.map(place => `
      <ul>
      <li><div class = 'name'><strong>${place.name}</strong></div></li>
      <li><div class = 'category'>${place.category}</div></li>
      <li><div class = 'address'><em>${place.address_line_1}</em></div></li>
      <li><div class = 'city'><em>${place.city}</em></div></li>
      <li><div class = 'zip'><em>${place.zip}</em></div></li>
      <ul>
      <br>
      `).join('');
    // eslint-disable-next-line no-use-before-define
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.input');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  // eslint-disable-next-line block-spacing
  searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)});
}

window.onload = windowActions;
