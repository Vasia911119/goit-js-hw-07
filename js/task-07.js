//Get access to input
const inputPosition = document.getElementById("font-size-control");

//Get text to edit

const textOnPage = document.getElementById("text");

//Get font size and default input value

const defaultFontSize = window.getComputedStyle(textOnPage).fontSize.replace(/\D+/g, "");
const defaultInputValue = inputPosition.value;

//Function to change the font size

const changeFontSize = event => textOnPage.style.fontSize = event.currentTarget.value * defaultFontSize / defaultInputValue + 'px';

//Check input change

inputPosition.addEventListener("input", changeFontSize);