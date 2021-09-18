//Get access to input
const inputPosition = document.getElementById("font-size-control");

//Get text to edit

const textOnPage = document.getElementById("text");

//Get font size as default input value

inputPosition.value = window.getComputedStyle(textOnPage).fontSize.replace(/\D+/g, "");

//Function to change the font size

const changeFontSize = event => textOnPage.style.fontSize = event.currentTarget.value + 'px';

//Check input change

inputPosition.addEventListener("input", changeFontSize);