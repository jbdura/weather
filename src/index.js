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
const apiKey = "82005d27a116c2880c8f0fcb866998a0"

// "c87292305339360852056b3204d4f50e"


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
function getWeather(latitude, longitude) {
	let api = `https://api.openweathermap.org/data/2.5//weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
	// `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}&appid=${api}`

	// console.log(api)
	.then(function (res) {
		let data = res.json();
		return data;
	})
	.then(function (data) {
		weather.temperature.value = Math.floor(data.main.temp - kelvin)
		weather.description = data.weather[0].icon;
		weather.iconId = data.data.weather[0].icon;
		weather.city = data.name;
		weather.country = data.sys.country;
	})
	.then(function() {
		displayWeather();
	})
}

// Display weather
function displayWeather() {
	iconElement.innerHTML = `img src="./src/icons/${weather.iconId}.png"/>`;
	tempElement.innerHTML =  `${weather.temperature.value}°<span>C</span>`;
	descElement.innerHTML = weather.description;
	locationElement.innerHTML =`${weather.city}, ${weather.country}`;
}