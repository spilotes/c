const url = "https://api.animechan.io/v1/quotes/random";
const response = await fetch('/quotes/random')
const quote = await response.json()
const randomQuoteElement = document.getElementById("random-quote");
const generateQuoteButton = document.getElementById("generate-quote-button");

function generateQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { anime, character, quote } = data;
      randomQuoteElement.textContent = `"${quote}" - ${character} (${anime})`;
    })
    .catch((error) => console.error(error));
}

generateQuoteButton.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
