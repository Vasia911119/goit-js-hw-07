//Знайти поле вводу тексту та кількість символів по умові

const inputText = document.querySelector("#validation-input");
const textDataLength = inputText.getAttribute("data-length");


//Функція для перевірки на правильну кількість символів та індикації на сторінці

const validationInput = () => 
    inputText.value.length == textDataLength
        ? inputText.classList.add("valid") || inputText.classList.remove("invalid")
        : inputText.classList.add("invalid") || inputText.classList.remove("valid");

//Перевіряємо на втрату фокусу

inputText.addEventListener("blur", validationInput);