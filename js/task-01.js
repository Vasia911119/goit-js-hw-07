//Print the number of categories

const listOfCategories = document.querySelector("#categories").children;
console.log(`В списке ${listOfCategories.length} категории.`);

//Display the title and number of items in the category

for (let i = 0; i < listOfCategories.length; i++) {
    const elem = listOfCategories[i];

    console.log(`Категория: ${elem.querySelector("h2").textContent}`);
    console.log(`Количество элементов: ${elem.querySelector("ul").children.length}`);
}

//Variant 2

// [...listOfCategories].forEach(elem => {
//     console.log(`Категория: ${elem.querySelector("h2").textContent}`);
//     console.log(`Количество элементов: ${elem.querySelector("ul").children.length}`);
// });
