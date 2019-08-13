function blockScope() {
  var a = 2;

  if (2 + 3 === 5) {
    var a = 3;
    console.log(a);
  }
  console.log(a);
}

blockScope();

function functionScope() {
  var a = 2;

  function bar() {
    var a = 3;
    console.log(a);
  }

  bar();

  console.log(a);
}

functionScope();
