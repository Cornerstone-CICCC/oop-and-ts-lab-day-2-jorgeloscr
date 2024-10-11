"use strict";
// Create a function `transformInput` that accepts either a string or a number. 
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === 'string') {
        let wordReversed = x.split('').reverse().join('');
        return wordReversed;
    }
    else if (typeof x === 'number' && x > 0) {
        let factorial = 1;
        for (let i = 1; i <= x; i++) {
            factorial *= i;
        }
        return factorial;
    }
    throw new Error("No valid input, nor a string or a positive number");
}
// Expected output:
console.log(transformInput("TypeScript")); // "tpircSepyT"
console.log(transformInput(5)); // 120
