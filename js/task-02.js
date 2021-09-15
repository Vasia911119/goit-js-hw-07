const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Create a list of ingredients

const listOfIngredients = [];
ingredients.forEach(ingradient => {
  const elementOfListOfIngredients = document.createElement("li");
  elementOfListOfIngredients.textContent = ingradient;
  listOfIngredients.push(elementOfListOfIngredients);
});

//Add a list to the page

document.querySelector("#ingredients").append(...listOfIngredients);