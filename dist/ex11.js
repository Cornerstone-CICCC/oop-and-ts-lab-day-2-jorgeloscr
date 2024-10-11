"use strict";
// Create two interfaces `Flyable` and `Swimmable`. Each should have unique methods.
// Create a class `Duck` that implements both interfaces.
// Write a function `getCapabilities` that accepts an object with both interfaces and logs the duck's capabilities.
// Return type: void.
class Duck {
    fly() {
        console.log("Duck is flying");
    }
    swim() {
        console.log("Duck is swimming");
    }
}
function getCapabilities(duck) {
    duck.fly();
    duck.swim();
}
// Expected output:
console.log(getCapabilities(new Duck()));
// Duck is flying
// Duck is swimming
