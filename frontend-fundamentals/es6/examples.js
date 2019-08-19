function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

var p = new Person();

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

var p = new Person();
