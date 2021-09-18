//Get access to input
const inputField = document.getElementsByTagName("input")[0];

//Get access to create and clear buttons

const buttonAdd = document.querySelector('[data-action="render"]');
const buttonClear = document.querySelector('[data-action="destroy"]');

//Get access to container with the boxes

const boxesContainer = document.getElementById("boxes");

//Functions for creating and deleting boxes

let defaultWidth = 30;
let defaultHeight = 30;

const randomRgb = () => Math.round(255 * Math.random());

const addBox = () => {
    const amount = inputField.value;
    createBoxes(amount);
    inputField.value = "";
};

const delBox = () => {
    boxesContainer.innerHTML = "";
    inputField.value = "";
    defaultWidth = 30;
    defaultHeight = 30;
};

const createBoxes = amount => {
    const boxes = [];
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div");
        box.style.cssText =
            `width: ${defaultWidth += 10}px; 
            height: ${defaultHeight += 10}px; 
            background-color: rgba( ${randomRgb()} , ${randomRgb()} , ${randomRgb()} )`;
        boxes.push(box);
    };
    boxesContainer.append(...boxes);
};

//Check for button presses

buttonAdd.addEventListener("click", addBox);
buttonClear.addEventListener("click", delBox);