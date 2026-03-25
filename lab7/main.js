"use strict";

function init() {
  let btn = document.getElementById("fetch-btn");
  btn.addEventListener("click", fetchDog);
  let btnTwo = document.getElementById("meal-btn");
  btnTwo.addEventListener("click", fetchMeal);
}

function fetchDog() {
  let url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(statusCheck)
    .then(resp => resp.json())
    .then(showDog)
    .catch(handleError);
}

function showDog(data) {
  console.log("Dog data:", data);
  let img = document.createElement("img");
  img.src = data.message;
  img.alt = "A random dog";
  document.getElementById("output").appendChild(img);
}

async function statusCheck(res) {
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res;
}

function handleError(err) {
  console.error("Something went wrong:", err);
  document.getElementById("output").textContent =
    "The kitchen is closed! (Error loading data)";
}
function handleErrorMeal(err) {
  console.error("Something went wrong:", err);
  document.getElementById("meal-output").textContent =
    "The kitchen is closed! (Error loading data)";
}
function showMeals(data) {
    let container = document.createElement("div");
   if(document.getElementById("meal-output").firstChild) {
        document.getElementById("meal-output").removeChild(document.getElementById("meal-output").firstChild);
    }
    for(let i = 0; i < data.meals.length; i++) {
        console.log("Meal data:", data.meals[i]);
        let img = document.createElement("img");
        img.src = data.meals[i].strMealThumb;
        img.alt = data.meals[i].strMeal;
        container.appendChild(img);
    }
    document.getElementById("meal-output").appendChild(container);
}

function fetchMeal() {
  let food = document.getElementById("food-input").value;
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + food;
  fetch(url)
    .then(statusCheck)
    .then(resp => resp.json())
    .then(showMeals)
    .catch(handleErrorMeal);
}

init();
