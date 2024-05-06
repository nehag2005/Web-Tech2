const suggestions = document.getElementById('suggestions');
const findBtn = document.getElementById('findBtn');
const result = document.getElementById('results');

findBtn.addEventListener('click', () => {
  suggestions.textContent = 'Searching for booking offices near me...';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(processUserLocation, handleLocationError);
  } else {
    suggestions.textContent = 'Geolocation is not supported by this browser.';
  }
});


function processUserLocation(p) {

  const fakeOffices = [
    { name: 'Purrfect Paws', coords: { lat: p.coords.latitude + 0.01, lng: p.coords.longitude - 0.02 } }, 
    { name: "Whiskers & Co.", coords: { lat: p.coords.latitude - 0.015, lng: p.coords.longitude + 0.01 } },
    { name: "The Cat's Meow", coords: { lat: p.coords.latitude + 0.02, lng: p.coords.longitude } },
    { name: "Feline Funhouse", coords: { lat: p.coords.latitude - 0.008, lng: p.coords.longitude - 0.012 } },
  ];

  display(fakeOffices); 
}

  
function randomDistance() {
    const distances = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const index = Math.floor(Math.random() * distances.length);
    return distances[index]; 
}


function display(offices) {
  suggestions.textContent = ''; 
  if (offices.length > 0) {
    result.innerHTML = offices.map(o => `
      <div class="card mb-3 rounded custom-color">
        <div class="card-body">
          <p class="card-text ">&#128205${o.name}</p>
          <p class="card-text" >Distance: ${randomDistance()} km</p>  
          <p class="card-text">Opening Hours: 9:00 AM - 5:00 PM</p>  </div>
        </div>
      </div>
    `).join('');
  } else {
    suggestions.textContent = 'Sorry, no booking offices found nearby.';
  }
}

// w3schools - HTML Geolocation API
function handleLocationError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        suggestions.textContent = 'Error: You have denied location permission.';
        break;
      case error.POSITION_UNAVAILABLE:
        suggestions.textContent = 'Error: Location information is unavailable.';
        break;
      case error.TIMEOUT:
        suggestions.textContent =  'Error: The request to get your location timed out.';
        break;
      default: 
        suggestions.textContent =  'Error: An unknown error occurred.';      
    }
  }


