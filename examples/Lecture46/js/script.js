// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}

// var result = multiply(2, 3);
// console.log(result);
// console.log(multiply(4, 5));

multiply.version = "v.1.0.0";
console.log(multiply.version);


// function factory
function makemultiplier(multiplier) {
  var myfunc = function (x) {
    return multiplier * x;
  };
  return myfunc;
}

var multiply3 = makemultiplier(3);
console.log(multiply3(6));
var multiply7 = makemultiplier(7);
console.log(multiply7(7));


// passing function as argument
function Operation(x, operation) {
  return operation(x);
}

var result = Operation(5, makemultiplier(20));
console.log(result);
console.log(Operation(6, makemultiplier(5)));


