/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_audioPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/audioPlayer */ \"./src/js/modules/audioPlayer.js\");\n/* harmony import */ var _modules_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calendar */ \"./src/js/modules/calendar.js\");\n/* harmony import */ var _modules_fon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fon */ \"./src/js/modules/fon.js\");\n/* harmony import */ var _modules_randomQuotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/randomQuotes */ \"./src/js/modules/randomQuotes.js\");\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/weather */ \"./src/js/modules/weather.js\");\n    \r\n    \r\n    \r\n    \r\n    \r\n\r\n\r\n\r\n    (0,_modules_audioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_calendar__WEBPACK_IMPORTED_MODULE_1__.calendar)()\r\n    ;(0,_modules_fon__WEBPACK_IMPORTED_MODULE_2__.fon)();\r\n    (0,_modules_randomQuotes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_modules_weather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/audioPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/audioPlayer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList */ \"./src/js/modules/playList.js\");\n\r\n\r\nfunction audioPlayer() {\r\n\r\n// Аудиоплеер\r\n    let playerControls = document.querySelector('.player-controls'),\r\n        playPrev = document.querySelector('.play-prev'),\r\n        playNext = document.querySelector('.play-next'),\r\n        playBtn = document.querySelector('.play'),\r\n        isPlay = false,\r\n        playNum = 0;\r\n\r\n    const audio = new Audio();\r\n\r\n    function playAudio() {\r\n        audio.src = _playList__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\r\n        audio.currentTime = 0;\r\n        audio.play();\r\n    }\r\n\r\n    function pauseAudio() {\r\n        audio.pause();\r\n    }\r\n\r\n    playBtn.addEventListener('click', () => {\r\n        if (isPlay === false) {\r\n            isPlay = true;\r\n            playBtn.classList.add('pause')\r\n            playAudio()\r\n        } else {\r\n            isPlay = false;\r\n            playBtn.classList.remove('pause')\r\n            pauseAudio();\r\n        }\r\n    });\r\n    playNext.addEventListener('click', ()=> {\r\n        if (playNum === _playList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1) {\r\n            playAudio()\r\n        } else {\r\n            pauseAudio()\r\n            playNum++;\r\n            playAudio()\r\n        }\r\n    });\r\n    playPrev.addEventListener('click', ()=> {\r\n        if (playNum === 0) {\r\n            playAudio()\r\n        } else {\r\n            pauseAudio()\r\n            playNum--;\r\n            playAudio()\r\n        }\r\n    });\r\n\r\n    //Плейлист\r\n    const audioList = document.querySelector('.play-list');\r\n\r\n    _playList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(item => {\r\n        const li = document.createElement('li');\r\n        li.classList.add('play-item');\r\n        li.textContent = item.title;\r\n        audioList.append(li);\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioPlayer);\n\n//# sourceURL=webpack://momentum/./src/js/modules/audioPlayer.js?");

/***/ }),

/***/ "./src/js/modules/calendar.js":
/*!************************************!*\
  !*** ./src/js/modules/calendar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calendar\": () => (/* binding */ calendar)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/js/modules/general.js\");\n\r\n\r\nfunction calendar() {\r\n    //Получение текущей даты и часов\r\n    const greetingText = document.querySelector(\".greeting\"),\r\n        time = document.querySelector('.time'),\r\n        dateDate = document.querySelector('.date'),\r\n        name = document.querySelector('.name');\r\n\r\n    function setLocalStorage() {\r\n        localStorage.setItem(\"name\", name.value);\r\n    }\r\n    window.addEventListener(\"beforeunload\", setLocalStorage);\r\n\r\n    function getLocalStorage() {\r\n        if (localStorage.getItem(\"name\")) {\r\n            name.value = localStorage.getItem(\"name\");\r\n        }\r\n    }\r\n    window.addEventListener(\"load\", getLocalStorage);\r\n\r\n\r\n//Часы и календарь\r\n//Локальное время\r\n    function showTime() {\r\n        const date = new Date();\r\n        time.textContent = date.toLocaleTimeString();\r\n        showDay();\r\n        setTimeout(showTime, 1000);\r\n    }\r\n\r\n    showTime()\r\n\r\n//Текущий день и месяц\r\n    function showDay(lang) {\r\n        let date = new Date(),\r\n        select = document.querySelector('select');\r\n        lang = select.value;\r\n        if (lang === 'ru') {\r\n            const options = {weekday: 'long', day: 'numeric', month: 'long'};\r\n            dateDate.textContent = date.toLocaleDateString('ru-RU', options);\r\n        } else {\r\n            const options = {weekday: 'long', day: 'numeric', month: 'long'};\r\n            dateDate.textContent = date.toLocaleDateString('en-EN', options);\r\n        }\r\n    }\r\n\r\n    showDay();\r\n\r\n//Присваиваем переменой день недели\r\n\r\n//Выдаём приветственную фразу\r\n    let select = document.querySelector('select');\r\n    let lang = select.value;\r\n    console.log(lang)\r\n\r\n    const showGreeting = function (lang) {\r\n        if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'morning') {\r\n            greetingText.textContent = _general__WEBPACK_IMPORTED_MODULE_0__.greetingTranslation.greeting.morning[lang]\r\n        }\r\n\r\n            if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'day') {\r\n                greetingText.textContent = _general__WEBPACK_IMPORTED_MODULE_0__.greetingTranslation.greeting.day[lang]\r\n            }\r\n            if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'evening') {\r\n                greetingText.textContent = _general__WEBPACK_IMPORTED_MODULE_0__.greetingTranslation.greeting.evening[lang]\r\n            }\r\n            if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'night') {\r\n                greetingText.textContent = _general__WEBPACK_IMPORTED_MODULE_0__.greetingTranslation.greeting.night[lang]\r\n            }\r\n        }\r\n\r\n        showGreeting(lang);\r\n\r\n        select.addEventListener('change', ()=> {\r\n            lang = select.value;\r\n            showGreeting(lang);\r\n            showDay(lang);\r\n        })\r\n\r\n        console.log(lang)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/calendar.js?");

/***/ }),

/***/ "./src/js/modules/fon.js":
/*!*******************************!*\
  !*** ./src/js/modules/fon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fon\": () => (/* binding */ fon)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/js/modules/general.js\");\n\r\n\r\nfunction fon() {\r\n        //Фон\r\n        const btn_prev = document.querySelector('.slide-prev'),\r\n            btn_next = document.querySelector('.slide-next'),\r\n            fon = document.querySelector('body');\r\n        console.log(_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay)\r\n\r\n\r\n//Добавление 0 к числу, если оно меньше 9\r\n        function getZero(num) {\r\n            if (num >= 0 && num < 10) {\r\n                return `0${num}`;\r\n            } else {\r\n                return num;\r\n            }\r\n        }\r\n\r\n//Смена фона и слайдер\r\n\r\n        let getRandomNum = (0,_general__WEBPACK_IMPORTED_MODULE_0__.random)(1, 20) //номер рандомной картинки\r\n        const randomImage = getZero(getRandomNum); // номер рандомной картинки с 0 в начале, если число меньше 9\r\n    //Рандомный фон\r\n    const randomFon = function() {\r\n\r\n        if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'morning') {\r\n            fon.style.backgroundImage = `url(\"assets/images/morning/${randomImage}.jpg\")`\r\n        }\r\n        if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'day') {\r\n            fon.style.backgroundImage = `url(\"assets/images/day/${randomImage}.jpg\")`\r\n        }\r\n        if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'evening') {\r\n            fon.style.backgroundImage = `url(\"assets/images/evening/${randomImage}.jpg\")`\r\n        }\r\n        if (_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay === 'night') {\r\n            fon.style.backgroundImage = `url(\"assets/images/night/${randomImage}.jpg\")`\r\n        }\r\n    }\r\n\r\n    randomFon();\r\n\r\n//Переключение слайдов\r\n        function getSlideNext() {\r\n            getRandomNum = getRandomNum + 1;\r\n            if (getRandomNum === 21) {\r\n                getRandomNum = 1\r\n            }\r\n            fon.style.backgroundImage = `url(\"assets/images/${_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay}/${getZero(getRandomNum)}.jpg\")`\r\n        }\r\n\r\n        function getSlidePrev() {\r\n            getRandomNum = getRandomNum - 1;\r\n            if (getRandomNum === 0) {\r\n                getRandomNum = 20\r\n            }\r\n            fon.style.backgroundImage = `url(\"assets/images/${_general__WEBPACK_IMPORTED_MODULE_0__.timeOfDay}/${getZero(getRandomNum)}.jpg\")`\r\n        }\r\n\r\n        btn_prev.addEventListener('click', getSlidePrev);\r\n        btn_next.addEventListener('click', getSlideNext);\r\n        setInterval(getSlideNext, 10000);\r\n    }\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/fon.js?");

/***/ }),

/***/ "./src/js/modules/general.js":
/*!***********************************!*\
  !*** ./src/js/modules/general.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimeOfDay\": () => (/* binding */ getTimeOfDay),\n/* harmony export */   \"timeOfDay\": () => (/* binding */ timeOfDay),\n/* harmony export */   \"hours\": () => (/* binding */ hours),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"greetingTranslation\": () => (/* binding */ greetingTranslation),\n/* harmony export */   \"lang\": () => (/* binding */ lang),\n/* harmony export */   \"select\": () => (/* binding */ select)\n/* harmony export */ });\n//Получение текущей даты и часов\r\nlet date = new Date(),\r\n    hours = date.getHours();\r\n\r\n//Получить рандомное число\r\nconst random = (min, max) => {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\r\n\r\n//Получить день недели\r\nfunction getTimeOfDay (hours) {\r\n    if (hours > 5 && hours < 12) {\r\n        return 'morning'\r\n    }\r\n    if (hours > 11 && hours < 18) {\r\n        return 'day'\r\n    }\r\n    if (hours > 17 && hours < 24) {\r\n        return 'evening'\r\n    }\r\n    if (hours >= 0 && hours < 6) {\r\n        return 'night'\r\n    }\r\n}\r\nlet timeOfDay = getTimeOfDay(hours);\r\n\r\nconst greetingTranslation = {\r\n    'greeting': {\r\n        'morning': {\r\n            'en': 'Good Morning',\r\n            'ru': 'Доброе утро',\r\n            'bel': 'Добрай раніцы'\r\n        },\r\n        'day': {\r\n            'en': 'Good day',\r\n            'ru': 'Добрый день',\r\n            'bel': 'Добры дзень',\r\n        },\r\n        'evening': {\r\n            'en': 'Good evening',\r\n            'ru': 'Добрый вечер',\r\n            'bel': 'Добры вечар',\r\n        },\r\n        'night': {\r\n            'en': 'Good night',\r\n            'ru': 'Доброй ночи',\r\n            'bel': 'Дабранач'\r\n        }\r\n    }\r\n}\r\nlet select = document.querySelector('select');\r\nlet lang = select.value;\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/modules/general.js?");

/***/ }),

/***/ "./src/js/modules/playList.js":
/*!************************************!*\
  !*** ./src/js/modules/playList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playList = [\r\n    {\r\n        title: 'Aqua Caelestis',\r\n        src: './assets/sounds/Aqua_Caelestis.mp3',\r\n        duration: '00:58'\r\n    },\r\n    {\r\n        title: 'Ennio Morricone',\r\n        src: './assets/sounds/Ennio_Morricone.mp3',\r\n        duration: '01:37'\r\n    },\r\n    {\r\n        title: 'River Flows In You',\r\n        src: './assets/sounds/River_Flows_In_You.mp3',\r\n        duration: '01:37'\r\n    },\r\n    {\r\n        title: 'Summer Wind',\r\n        src: './assets/sounds/Summer_Wind.mp3',\r\n        duration: '01:50'\r\n    },\r\n]\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);\n\n//# sourceURL=webpack://momentum/./src/js/modules/playList.js?");

/***/ }),

/***/ "./src/js/modules/randomQuotes.js":
/*!****************************************!*\
  !*** ./src/js/modules/randomQuotes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ \"./src/js/modules/general.js\");\n\r\nfunction randomQuotes() {\r\n\r\n//Виджет рандомная цитата\r\n    const quote = document.querySelector('.quote'),\r\n        author = document.querySelector('.author'),\r\n        changeQuote = document.querySelector('.change-quote');\r\n\r\n    async function getQuotes() {\r\n        const quotes = 'js/data.json';\r\n        const res = await fetch(quotes);\r\n        const data = await res.json();\r\n\r\n        let randomQuotes = (0,_general__WEBPACK_IMPORTED_MODULE_0__.random)(0, data.length - 1);\r\n\r\n        quote.textContent = data[randomQuotes].quote;\r\n        author.textContent = data[randomQuotes].author;\r\n    }\r\n    changeQuote.addEventListener('click', getQuotes);\r\n\r\n    getQuotes();\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomQuotes);\n\n//# sourceURL=webpack://momentum/./src/js/modules/randomQuotes.js?");

/***/ }),

/***/ "./src/js/modules/weather.js":
/*!***********************************!*\
  !*** ./src/js/modules/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction weather() {\r\n\r\n//Виджет погоды\r\n    const city = document.querySelector('.city'),\r\n        weatherIcon = document.querySelector('.weather-icon'),\r\n        temperature = document.querySelector('.temperature'),\r\n        weatherDescription = document.querySelector('.weather-description'),\r\n        select = document.querySelector('select'),\r\n        wind = document.querySelector('.weather-wind'),\r\n        humidity = document.querySelector('.weather-humidity'),\r\n        lang = select.value;\r\n\r\n    async function getWeather(lang) {\r\n        let url;\r\n        if (lang === 'en') {\r\n            url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=29314759c913249e9a90a527f66c31d8&units=metric`;\r\n        }\r\n        else {\r\n            url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=29314759c913249e9a90a527f66c31d8&units=metric`;\r\n        }\r\n        const res = await fetch(url);\r\n        const data = await res.json();\r\n        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);\r\n        weatherIcon.className = 'weather-icon owf';\r\n        weatherIcon.classList.add(`owf-${data.weather[0].id}`);\r\n        temperature.textContent = `${data.main.temp}°C`;\r\n        weatherDescription.textContent = data.weather[0].description;\r\n        wind.textContent = `wind ${data.wind.speed} м/с`;\r\n        humidity.textContent = `humidity ${data.main.humidity}%`;\r\n    }\r\n    getWeather(lang);\r\n\r\n    function setCity(event) {\r\n        if (event.code === 'Enter') {\r\n            getWeather();\r\n            city.blur();\r\n        }\r\n    }\r\n    select.addEventListener('change', ()=> {\r\n        let lang = select.value;\r\n        getWeather(lang);\r\n    });\r\n\r\n    city.addEventListener('keypress', setCity);\r\n\r\n    //Сохранение данных в LocalStorage\r\n    function setLocalStorage() {\r\n        localStorage.setItem(\"data\", city.value);\r\n    }\r\n\r\n    function getLocalStorage() {\r\n        if (localStorage.getItem(\"data\")) {\r\n            city.value = localStorage.getItem(\"data\");\r\n        }\r\n    }\r\n    window.addEventListener(\"beforeunload\", setLocalStorage);\r\n    document.addEventListener('DOMContentLoaded', getWeather);\r\n    window.addEventListener(\"load\", getLocalStorage);\r\n\r\n    city.addEventListener(\"change\", () => getWeather(city.value));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n//# sourceURL=webpack://momentum/./src/js/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;