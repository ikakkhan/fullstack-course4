// var company = new Object();
// company.name = "Youtube";
// company.ceo = new Object();
// company.ceo.Firstname = "Khan";
// company.ceo.favcolor = "blue";

// console.log(company);
// console.log("CEO favorite color is : " + company.ceo.favcolor);

// console.log(company.name);
// console.log(company["name"]);

// var stockpropname = "stock of the company";
// company[stockpropname] = 110;
// console.log("Stock of company is : " + company["stock of the company"]);
// company.stockpropname = 120;
// console.log("Stock of company is : " + company[stockpropname]);

//object literal
var stockpropname = "stock of the company";
var facebook = {
  name: "Facebook", 
  ceo: {
    Firstname: "Mark", 
    favcolor: "blue"
  }, 
  stockpropname: 110
};

console.log(facebook);
console.log(facebook.stockpropname);
console.log(facebook["stockpropname"]);