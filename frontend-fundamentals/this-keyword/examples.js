global.age = 31;
function Person(age) {
  this.age = age;

  this.sayAge = function() {
    console.log(this.age);
  };
}

const p = new Person(10);
p.sayAge();

const myObj = {
  name: "Paul",
  sayName: function() {
    console.log(this.name);
  }
};

myObj.sayName();
