// Elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-desc p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");


// Data
const weather = {};

weather.temperature = {
	unit : "celsius"
};

// Constant values
const kelvin = 273

// API
const api = "82005d27a116c2880c8f0fcb866998a0"

// geolocation
if('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(setPosition, showError);
}else {
	notificationElement.style.display = 'block';
	notificationElement.innerHTML = '<p>Browser does not support Geolocation.</p>';
}

// location
function setPosition(position) {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude;

	getWeather(latitude, longitude);
}
// location error
function showError(error) {
	notificationElement.style.display = 'block';
	notificationElement.innerHTML = `<p>${error.message}</p>`;
}

// API
function getWeather(lat, lng) {
	let api = `http://api.openweathermap.org/data/2.5//weather?lat=${lat}&lon=${lng}&appid=${api}`
	// `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}&appid=${api}`

	console.log(api)
}

