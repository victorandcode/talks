/**
 * Questions to answer:
 * - Object.create do
 * - What is the value of instance.prototype
 * - How does an attribute get resolved
 * - When to assign to obj.prototype.myMethod
 *  How can I call attributes from the parent
 */

/**
 * 
 * Practicar y dominar los conceptos detrás de inheritance con prototypes
  Usando el operador de instanceof, isPrototypeOf
  getPrototypeof
  https://stackoverflow.com/questions/38740610/object-getprototypeof-vs-prototype
  https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md
  https://github.com/getify/You-Dont-Know-JS/blob/fe3ea179f1efd2c649789f713ead9ed765a4d80b/this%20%26%20object%20prototypes/ch6.md
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
