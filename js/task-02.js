// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")


// Через функциональные методы массива


// const ingredienstItemArray = ingredients.map((item) => {
//   const ingredienstItem = document.createElement("li")
//   ingredienstItem.textContent = item
//   ingredienstItem.classList.add("item")
// return ingredienstItem
// })

// ingredientsList.append(...ingredienstItemArray)



//Через функцию

const getIngredienstItemArray = (ingredients) => {

  return ingredients.map((item) => {
    const ingredienstEL = document.createElement("li")
    ingredienstEL.textContent = item
    ingredienstEL.classList.add("item")
    return ingredienstEL
  })
}
const elements = getIngredienstItemArray(ingredients);
ingredientsList.append(...elements)