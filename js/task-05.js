//Find the input field, text output location, and default values

const inputTextField = document.getElementById("name-input");
const outputTextField = document.getElementById("name-output");
const defaultText = outputTextField.textContent;

//Change the text when type in input

const changeText = event => outputTextField.textContent = event.currentTarget.value;

//Get values ​​from the text input field

inputTextField.addEventListener("input", changeText);