// Copy by Reference vs by Value
//copy by value(primitive)
var a = 7;
var b = a;

console.log("a: " + a);
console.log("b: " + b);

b = 5;

console.log("after b update");
console.log("a: " + a);
console.log("b: " + b);

//copy by reference(object)
a =  {
  x : 7,
  y : 40
};
b = a;
console.log(a);
console.log(b);

console.log("a: " + a.x);
console.log("b: " + b.x);

b.x = 5;

console.log(a);
console.log(b);

console.log("after b update");
console.log("a: " + a.x);
console.log("b: " + b.x);

// pass by Reference vs by Value
//pass by value(primitive)
function changeprim(prim) {
  console.log("in change primitive")
  console.log("before: " + prim);

  prim = 5;
  console.log("after: " + prim);
}

var value = 7;
changeprim(value);
console.log("after changeprim, value: " + value);

// pass by Reference(object)
function changeobj(obj) {
  console.log("in change of obeject");
  console.log(obj);
  console.log("before: " + obj.x);

  obj.x = 5;
  console.log(obj);
  console.log("after: " + obj.x);
}

value = {
  x : 7,
  y : 30
};
changeobj(value);
console.log("after changeobj");
console.log(value);
console.log("value.x: " + value.x);
