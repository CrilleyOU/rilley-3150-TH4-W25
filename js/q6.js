// Question 6
// Need to generate html with the quote
// Need to listen to left clicks on the button
// Need to store 10 quotes

// Grab the elements from our HTML
const button = document.getElementById("submit")
const quoteOutput = document.getElementById("quoteOutput")


// quotes from https://smartreach.io/blog/famous-quotes/
const quotes = [
    {quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt"},
    {quote: "To be, or not to be, that is the question.", person: "William Shakespeare"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt"},
    {quote: "That which does not kill us makes us stronger.", person: "Friedrich Nietzche"},
    {quote: "Knowledge is power.", person: "Francis Bacon"},
    {quote: "A journey of a thousand miles begins with a single step.", person: "Lao Tzu"},
    {quote: "The greatest glory in living lies not in never failing, but rising everytime we fall", person: "Nelson Mandela"},
    {quote: "It is better to have loved and lost than never to have loved at all.", person: "Alfred Tennyson"},
    {quote: "Ask not what your country can do for you, ask what you can do for your country.", person: "John F. Kennedy"},
    {quote: "A small leak will sink a great ship.", person: "Benjamin Frankin"}
]

// Display quote on the page
function randomQuote(arrayQuotes){
    // Generates a random number between 0 and 1
    const randomNum = Math.random();
    console.log(randomNum);
   
    // Picks a random index of our array based on its length
    // In our case we take our random number which is between 0 and 1 and multiply it by our array length, then using math.floor rounds it down to a whole number
    const randomIndex = Math.floor(randomNum * arrayQuotes.length);
    console.log(randomIndex);

    // Access our array
    const randomQuote = arrayQuotes[randomIndex];
    console.log(randomQuote);

    // Print our random quote and who said it to our html
    quoteOutput.innerHTML = `"${randomQuote.quote}" -${randomQuote.person}`
    
    
}

// Event listener for the button
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Using the button variable we already declared, we can add an event listener to liten for a "click", event. When that happens we call our random quote function passing our array of quotes as a parameter 
button.addEventListener("click", () => randomQuote(quotes));