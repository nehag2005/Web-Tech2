const findBtn = document.getElementById('findBtn');
const result = document.getElementById('results');
const feedback = document.getElementById('feedback');

findBtn.addEventListener('click', () => {
  feedback.textContent = 'Searching for nearby booking offices...';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(processUserLocation, handleLocationError);
  } else {
    feedback.textContent = 'Geolocation is not supported by this browser.';
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

  
function getRandomDistance() {
    const distanceKm = (Math.random() * 20) + 5; // Generate random distance between 5km and 25km
    return distanceKm.toFixed(1); // Round to one decimal place 
}

function display(offices) {
  feedback.textContent = ''; 
  if (offices.length > 0) {
    result.innerHTML = offices.map(office => `
      <div class="card mb-3">
        <div class="card-body">
          <p class="card-text">${office.name}</p>
          <p class="card-text">Distance: ${getRandomDistance()} km</p>  
          <p class="card-text">Opening Hours: 9:00 AM - 5:00 PM</p>  </div>
        </div>
      </div>
    `).join('');
  } else {
    feedback.textContent = 'Sorry, no booking offices found nearby.';
  }
}

function handleLocationError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        feedback.textContent = 'Error: You have denied location permission.';
        break;
      case error.POSITION_UNAVAILABLE:
        feedback.textContent = 'Error: Location information is unavailable.';
        break;
      case error.TIMEOUT:
        feedback.textContent =  'Error: The request to get your location timed out.';
        break;
      default: 
        feedback.textContent =  'Error: An unknown error occurred.';      
    }
  }


