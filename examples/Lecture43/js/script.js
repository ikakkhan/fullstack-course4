// // Plus Equal
// var string = "hello";
// string += " world";
// string = string + " world";
// console.log(string + "!");

// // Not a Number
// console.log((5 + 4) / 3);
// console.log(undefined / 5);//NaN(Not a Number)
// function test1 (a) {
//   console.log(a/ 5);
// }
// test1();

// // Equality
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x = 4 is equal to y = 4");
// }
// // type coercion
// x = "4";
// if (x == y) {
//   console.log("x = '4' is equal to y = 4");
// }
// // Strict equality
// if (x === y) {
//   console.log("Strict: x = '4' is equal to y = 4");
// }
// else {
//   console.log("Strict: x = '4' is not equal to y = 4");
// }

// // If statement flase (all)
// if ( false || null || undefined || "" || 0 || NaN) {
//   console.log("This line won't ever execute");
// }
// else {
//   console.log("All false");
// }
// // If statement true (all)
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// }
// else {
//   console.log("This line won't ever execute");
// }

// // {} on the same or next line
// function a()
// {
//   return
//   {
//     name: "Yaakov"
//   };
// }
// function b() {
//   return {
//     name: "Yaakov"
//   };
// }
// console.log(a());
// console.log(b());

// for loop
var sum = 0;
for (var i = 0; i < 10; i += 1) {
  sum = sum + i;
  console.log(sum);
}
console.log("0 + 1 + 2 + 3 + .. + 9 = " + sum);