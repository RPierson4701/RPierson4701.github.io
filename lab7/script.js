let menuItem = {
    name: "Classic Cheeseburger",
    price: 9.99,
    category: "Burgers",
    toppings: ["lettuce", "tomato", "onion", "pickles"],
    nutrition: {
        calories: 540,
        protein: 28
    }
};

let myDinerOrder = {
    name: "Double Big Mac",
    price: 18.99,
    toppings: ["Big Mac Sauce", "Extra Bun", "lettuce", "tomato", "onion", "pickles"],
    nutrition: {
        calories: 2000,
        protein: "secret"
    }
};


console.log(menuItem);
console.log(menuItem.name);
console.log(menuItem["price"]);
console.log(menuItem.toppings[2]);
console.log(menuItem.nutrition.calories);

// Convert the JS object to a JSON string
let jsonString = JSON.stringify(menuItem);
console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString);

// Convert the JSON string back to a JS object
let parsedObj = JSON.parse(jsonString);
console.log("Parsed object:", parsedObj);
console.log("Type:", typeof parsedObj);
console.log("Name:", parsedObj.name);