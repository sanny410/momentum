import {timeOfDay, random, hours} from "./general";

function fon() {
        //Фон
        const btn_prev = document.querySelector('.slide-prev'),
            btn_next = document.querySelector('.slide-next'),
            fon = document.querySelector('body');
        console.log(timeOfDay)


//Добавление 0 к числу, если оно меньше 9
        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

//Смена фона и слайдер

        let getRandomNum = random(1, 20) //номер рандомной картинки
        const randomImage = getZero(getRandomNum); // номер рандомной картинки с 0 в начале, если число меньше 9
    //Рандомный фон
    const randomFon = function() {

        if (timeOfDay === 'morning') {
            fon.style.backgroundImage = `url("assets/images/morning/${randomImage}.jpg")`
        }
        if (timeOfDay === 'day') {
            fon.style.backgroundImage = `url("assets/images/day/${randomImage}.jpg")`
        }
        if (timeOfDay === 'evening') {
            fon.style.backgroundImage = `url("assets/images/evening/${randomImage}.jpg")`
        }
        if (timeOfDay === 'night') {
            fon.style.backgroundImage = `url("assets/images/night/${randomImage}.jpg")`
        }
    }

    randomFon();

//Переключение слайдов
        function getSlideNext() {
            getRandomNum = getRandomNum + 1;
            if (getRandomNum === 21) {
                getRandomNum = 1
            }
            fon.style.backgroundImage = `url("assets/images/${timeOfDay}/${getZero(getRandomNum)}.jpg")`
        }

        function getSlidePrev() {
            getRandomNum = getRandomNum - 1;
            if (getRandomNum === 0) {
                getRandomNum = 20
            }
            fon.style.backgroundImage = `url("assets/images/${timeOfDay}/${getZero(getRandomNum)}.jpg")`
        }

        btn_prev.addEventListener('click', getSlidePrev);
        btn_next.addEventListener('click', getSlideNext);
        setInterval(getSlideNext, 10000);
    }

export {fon};