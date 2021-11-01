//Получение текущей даты и часов
let date = new Date(),
    hours = date.getHours();

//Получить рандомное число
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Получить день недели
export function getTimeOfDay (hours) {
    if (hours > 5 && hours < 12) {
        return 'morning'
    }
    if (hours > 11 && hours < 18) {
        return 'day'
    }
    if (hours > 17 && hours < 24) {
        return 'evening'
    }
    if (hours >= 0 && hours < 6) {
        return 'night'
    }
}
let timeOfDay = getTimeOfDay(hours);

const greetingTranslation = {
    'greeting': {
        'morning': {
            'en': 'Good Morning',
            'ru': 'Доброе утро',
            'bel': 'Добрай раніцы'
        },
        'day': {
            'en': 'Good day',
            'ru': 'Добрый день',
            'bel': 'Добры дзень',
        },
        'evening': {
            'en': 'Good evening',
            'ru': 'Добрый вечер',
            'bel': 'Добры вечар',
        },
        'night': {
            'en': 'Good night',
            'ru': 'Доброй ночи',
            'bel': 'Дабранач'
        }
    }
}
let select = document.querySelector('select');
let lang = select.value;

export {timeOfDay, hours, random, greetingTranslation, lang, select}
