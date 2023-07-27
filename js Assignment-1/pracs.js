// Assignment 1:Array Operations

// let fruits = [];
// console.log(fruits);
// fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// fruits.shift(1);
// console.log(fruits);

// fruits.push("grape");
// console.log(fruits);

// fruits.splice(1, 1, "peer");
// console.log(fruits);
// // ['banana', 'peer', 'grape']

// Assignment 2: Object Operations

// let person = {};
// console.log(person);

// person = {
//   name: "john",
//   age: 30,
//   city: "New York",
// };
// console.log(person);

// delete person.age;
// console.log(person);

// person.job = "Engineer";
// console.log(person);

// person.city = "San Francisco";
// console.log(person);
//{name: 'john', city: 'San Francisco', job: 'Engineer'}

// Assignment 3:Array of Objects Operations
let cars = [];
console.log(cars);
car1 = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
};

car2 = {
  make: "Toyata",
  model: "Camry",
  year: 2019,
};
car3 = {
  make: "Toyata",
  model: "Camry",
  year: 2010,
};
cars = [car1, car2, car3];
console.log(cars);

cars.splice(0, 1);
console.log(cars);

newCar = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};
cars.push(newCar);
newCar.model = "Accord";
console.log(cars);
