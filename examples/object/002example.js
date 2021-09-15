// function constructor
// function animal(name, power) {
//   var obj = {};
//   obj.name = name;
//   obj.power = power;

//   return obj;
// }

// var obj1 = animal("doggu", 10);
// var obj2 = animal("coco", 15);
// console.log(obj1);
// console.log(obj2);

// function Animal(name, power) {
//   this.name = name;
//   this.power = power;

//   //   this.walk = function (energy) {
//   //     console.log("Dude, let me walk, remove this chain");
//   //     this.power -= energy;
//   //   };

//   //   this.sleep = function (energy) {
//   //     console.log("sleeping");
//   //     this.power += energy;
//   //   };
// }

// var husky = new Animal("doggu", 30);
// console.log(husky);
// husky.sleep(5);
// console.log(husky);
// console.log(husky instanceof Animal);
// var mylo = new Animal("mylo", 35);
// console.log(mylo);
// console.log(coco instanceof Animal);
// var deer = new Animal("selmon bhoi", 40);
// console.log(deer === coco);

// console.log(husky);
// console.log(deer);
// console.log(mylo);

// husky.eat(9);
// console.log(husky.power);

// prototype
// Animal.prototype.eat = function (energy) {
//   console.log("Eating");
//   this.power += energy;
// };

// var obj = {
//     walk: 'func',
// }

// // instance
// var obj1 = {
//     // ...
//     prototype: obj,
// }

// console.log(Animal.prototype);
// Animal.prototype.walk = function (energy) {
//   console.log("Dude, let me walk, remove this chain");
//   console.log(this);
//   this.power -= energy;
//   //   mylo.power = mylo.power - energy;
// };
// console.log(Animal.prototype);

// console.log(mylo.power);
// console.log(mylo);
// mylo.walk(10);
// console.log(mylo.power);

// deer.eat(2);
// console.log(deer.power);
// console.log(husky.power);

// function Animal(name, power) {
//   this.name = name;
//   this.power = power;
// }

// class AnimalWithClass {
//   constructor(name, power) {
//     this.name = name;
//     this.power = power;
//   }
// }

// var coco = new AnimalWithClass("coco", 30);
// console.log(coco);
