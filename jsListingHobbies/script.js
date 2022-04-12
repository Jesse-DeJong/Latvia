// Challenge: Listing Hobbies

// Create an array with 3 of your hobbies
const hobbies = ["Motorcycles","Computers","Reading"];
// Print in the console the first hobby in the array
console.log(hobbies[0]);
// Remove the first hobby from the array and store that hobby in a variable
const firstHobby = hobbies[0];
hobbies.shift();
console.log(hobbies);
// Store the length of the array in a variable
const length = hobbies.length;
console.log(hobbies);
// add another hobby at the end of the array
hobbies.push("Hiking");
console.log(hobbies);
// Print that last hobby to the console
console.log(hobbies.slice(-1)[0]);
// Bonus: Join all your hobbies in a single string each hobby being comma separated
console.log(`My hobbies are: ${JSON.stringify(hobbies)}`);

// Challenge: Grocery Lists
const groceries = ['apple', 'pear', 'papaya', 'mango', 'fifthFruit'];
const string = groceries.join(" | ");
console.log(string);