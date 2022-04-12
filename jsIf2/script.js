// Comparing Numbers
const x = 0;
const y = 1;

if (x > y) {
    console.log(`x is greater than y`);
} else if (x < y) {
    console.log(`x is smaller than y`);
} else {
    console.log(`x is equal to y`);
};

// User Input Type
const userInput = null;

if (typeof userInput === "number") {
    console.log(userInput ** 2);
} else if (typeof userInput === "string") {
    console.log(userInput);
} else {
    console.log('invalid Input');
}