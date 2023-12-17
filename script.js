const apiKey = `7a73d50029698cff52ae3b53a27404cc` 

function getWeather() {
    const city = document.getElementById('city').value;

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `<h2>${cityName}</h2>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>`;

    weatherContainer.appendChild(weatherInfo);
}