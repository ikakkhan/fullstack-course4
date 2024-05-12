function orderchickenwith(menu) {
  // if (menu == null || menu == undefined) {
  //   menu = "chicken";
  // }
 
  menu = menu || "chicken";

  console.log("Chicken with " + menu);
}

orderchickenwith("noodles");
orderchickenwith();