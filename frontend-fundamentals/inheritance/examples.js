/**
 * Questions to answer:
 * - What does Object.create do
 * - What is the value of instance.prototype
 * - How does an attribute get resolved
 * - When to assign to obj.prototype.myMethod
 * - How to use ES6 for classical inheritance
 *  Can I do abstract methods
 *  How can I can super methods
 *  How can I call attributes from the parent
 */

/**
 * Parasitic inheritance
 */
function Animal(name) {
  this.name = name;
  this.sayName = {};
}

function Dog(name) {
  const dog = new Animal(name);
  dog.bark = () => {
    console.log(this.name + " is barking");
  };
}

/**
 * Prototypal inheritance
 */
const fightingGame = {
  type: "Fights"
};

const streetFighter = Object.create(fightingGame);

debugger;
streetFighter.releaseYear = 1988;
