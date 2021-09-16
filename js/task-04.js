//Add a variable with the current value of the counter

let counterValue = 0;

//Find the value of the counter on the page

const value = document.querySelector("#value");

//Function to increase and decrease the value of the counter

const changeValueCounter = operator => {
    counterValue += operator;
    value.textContent = counterValue;
};

//Connect the function to the buttons on the page

const decrement = value.previousElementSibling;
const increment = value.nextElementSibling;

decrement.addEventListener("click", () => {
    changeValueCounter(decrement.textContent | 0)
});
increment.addEventListener("click", () => {
    changeValueCounter(increment.textContent | 0)
});