// src/index.js
// This file should import the fruits and both array helpers. It should then:

import fruits from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

let fruit = choice(fruits); 

console.log(`Can I please have one ${fruit}?`)
console.log(`Here, take some ${fruit}!`);
console.log(`Delish, can I get some more? `)

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);