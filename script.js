const api = "dae989ade22601682e2c43212e733d35";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("desc").innerText = data.weather[0].description;

        document.getElementById("feels").innerText = Math.round(data.main.feels_like);
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("wind").innerText = data.wind.speed;

        const iconCode = data.weather[0].icon;
        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(() => alert("City not found"));
}
