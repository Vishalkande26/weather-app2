
const apiKey = "1bfadefe1c90ece72ccf96c5cda70e39";

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} &deg;C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherInfo').innerHTML = '<p>City not found. Please try again.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weatherInfo').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}
