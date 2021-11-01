import {random} from "./general"
function randomQuotes() {

//Виджет рандомная цитата
    const quote = document.querySelector('.quote'),
        author = document.querySelector('.author'),
        changeQuote = document.querySelector('.change-quote');

    async function getQuotes() {
        const quotes = 'js/data.json';
        const res = await fetch(quotes);
        const data = await res.json();

        let randomQuotes = random(0, data.length - 1);

        quote.textContent = data[randomQuotes].quote;
        author.textContent = data[randomQuotes].author;
    }
    changeQuote.addEventListener('click', getQuotes);

    getQuotes();

}
export default randomQuotes;