const displayQuotes = document.querySelector(".displayQuotes");

const displayAuthor = document.querySelector("#displayAuthor");

const getquotesData  = document.querySelector("#getQuotes");

const display = (Quotes,author) => {

    displayQuotes.innerHTML = Quotes;

    displayAuthor.innerHTML = `-${author}`;
}


const getQuotes =  async () => {
    
    const Url = await fetch(" https://api.quotable.io/quotes/random");

    const Quotes = await Url.json();
    
display(Quotes[0].content,Quotes[0].author);

}

getquotesData.addEventListener("click",getQuotes);
