// Create two interfaces `Flyable` and `Swimmable`. Each should have unique methods.
// Create a class `Duck` that implements both interfaces.
// Write a function `getCapabilities` that accepts an object with both interfaces and logs the duck's capabilities.
// Return type: void.

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Flyable, Swimmable {
  fly() {
    console.log("Duck is flying");
  }

  swim() {
    console.log("Duck is swimming");
  }
}

function getCapabilities(duck: Flyable & Swimmable): void {
  duck.fly();
  duck.swim();
}

// Expected output:
console.log(getCapabilities(new Duck()))
// Duck is flying
// Duck is swimming