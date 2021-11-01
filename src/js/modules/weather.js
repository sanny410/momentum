function weather() {

//Виджет погоды
    const city = document.querySelector('.city'),
        weatherIcon = document.querySelector('.weather-icon'),
        temperature = document.querySelector('.temperature'),
        weatherDescription = document.querySelector('.weather-description'),
        select = document.querySelector('select'),
        wind = document.querySelector('.weather-wind'),
        humidity = document.querySelector('.weather-humidity'),
        lang = select.value;

    async function getWeather(lang) {
        let url;
        if (lang === 'en') {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=29314759c913249e9a90a527f66c31d8&units=metric`;
        }
        else {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=29314759c913249e9a90a527f66c31d8&units=metric`;
        }
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `wind ${data.wind.speed} м/с`;
        humidity.textContent = `humidity ${data.main.humidity}%`;
    }
    getWeather(lang);

    function setCity(event) {
        if (event.code === 'Enter') {
            getWeather();
            city.blur();
        }
    }
    select.addEventListener('change', ()=> {
        let lang = select.value;
        getWeather(lang);
    });

    city.addEventListener('keypress', setCity);

    //Сохранение данных в LocalStorage
    function setLocalStorage() {
        localStorage.setItem("data", city.value);
    }

    function getLocalStorage() {
        if (localStorage.getItem("data")) {
            city.value = localStorage.getItem("data");
        }
    }
    window.addEventListener("beforeunload", setLocalStorage);
    document.addEventListener('DOMContentLoaded', getWeather);
    window.addEventListener("load", getLocalStorage);

    city.addEventListener("change", () => getWeather(city.value));
}

export default weather;