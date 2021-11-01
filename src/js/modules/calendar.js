import { timeOfDay, greetingTranslation} from "./general";

function calendar() {
    //Получение текущей даты и часов
    const greetingText = document.querySelector(".greeting"),
        time = document.querySelector('.time'),
        dateDate = document.querySelector('.date'),
        name = document.querySelector('.name');

    function setLocalStorage() {
        localStorage.setItem("name", name.value);
    }
    window.addEventListener("beforeunload", setLocalStorage);

    function getLocalStorage() {
        if (localStorage.getItem("name")) {
            name.value = localStorage.getItem("name");
        }
    }
    window.addEventListener("load", getLocalStorage);


//Часы и календарь
//Локальное время
    function showTime() {
        const date = new Date();
        time.textContent = date.toLocaleTimeString();
        showDay();
        setTimeout(showTime, 1000);
    }

    showTime()

//Текущий день и месяц
    function showDay(lang) {
        let date = new Date(),
        select = document.querySelector('select');
        lang = select.value;
        if (lang === 'ru') {
            const options = {weekday: 'long', day: 'numeric', month: 'long'};
            dateDate.textContent = date.toLocaleDateString('ru-RU', options);
        } else {
            const options = {weekday: 'long', day: 'numeric', month: 'long'};
            dateDate.textContent = date.toLocaleDateString('en-EN', options);
        }
    }

    showDay();

//Присваиваем переменой день недели

//Выдаём приветственную фразу
    let select = document.querySelector('select');
    let lang = select.value;
    console.log(lang)

    const showGreeting = function (lang) {
        if (timeOfDay === 'morning') {
            greetingText.textContent = greetingTranslation.greeting.morning[lang]
        }

            if (timeOfDay === 'day') {
                greetingText.textContent = greetingTranslation.greeting.day[lang]
            }
            if (timeOfDay === 'evening') {
                greetingText.textContent = greetingTranslation.greeting.evening[lang]
            }
            if (timeOfDay === 'night') {
                greetingText.textContent = greetingTranslation.greeting.night[lang]
            }
        }

        showGreeting(lang);

        select.addEventListener('change', ()=> {
            lang = select.value;
            showGreeting(lang);
            showDay(lang);
        })

        console.log(lang)
}

export {calendar};