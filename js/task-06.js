//Find the text input field and the number of characters by condition

const inputText = document.querySelector("#validation-input");
const textDataLength = inputText.getAttribute("data-length");


//Function to check for the correct number of characters and display on the page

const validationInput = () => 
    inputText.value.length == textDataLength
        ? inputText.classList.add("valid") || inputText.classList.remove("invalid")
        : inputText.classList.add("invalid") || inputText.classList.remove("valid");

//Check for loss of focus

inputText.addEventListener("blur", validationInput);