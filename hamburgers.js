'use strict';

const size = [
  {title: 'small', price: 20, cal: 20},
  {title: 'big', price: 100, cal: 40}
];

const topping = [
  {title: 'cheesee', price: 10, cal: 20},
  {title: 'salad', price: 20, cal: 5},
  {title: 'potatoes', price: 15, cal: 10}
];

const stuffing = [
  {title: 'sauce', price: 15, cal: 0},
  {title: 'mayo', price: 20, cal: 0}
]

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  addTopping(topping) {
    this.color = 'red';
  }
  calculatePrice() {
    if (typeof this.topping !== 'undefined') {
      let total = this.size.price + this.stuffing.price + this.topping.price;
      return total;
    } else {
      let total = this.size.price + this.stuffing.price;
      return total;
    };
  }
  getSize() {
    console.log(this.size.title);
  }
  getStuffing() {
    console.log(this.stuffing.title);
  }
/*  removeTopping(topping) { // Убрать добавку }
  getToppings(topping) {   // Получить список добавок }
  getSize() {              // Узнать размер гамбургера }
  getStuffing() {          // Узнать начинку гамбургера }
  calculatePrice() {       // Узнать цену }
  calculateCalories() {    // Узнать калорийность }*/
}


const hamburger = new Hamburger(size[0], stuffing[0]);
console.log(hamburger.getSize());
