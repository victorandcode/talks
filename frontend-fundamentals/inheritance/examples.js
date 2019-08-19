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
