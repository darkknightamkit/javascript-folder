// let car = {
  
//   make :"Toyota",
//   model:"camry",
//   year :2020,
//   start:function(){
//     return `${this.make} car got started in ${this.year}`
//   }

// }



Array.prototype.hitesh = function (){
  return `custom method ${this}`;
}

let myarr = [1,1,2,2,4];
// console.log(myarr.hitesh());

// encapsulation = restrict the direct acces of the data

class Bankaccount{
   #balance =0;

    deposit(amount){
    this.#balance += amount;
    return this.#balance;
   }
   getbalnce(){
    return `$ ${this.#balance}`;
   }
}
let acc = new Bankaccount();
// console.log(acc.deposit());

// abstraction

class coffee{
  
  start(){
    return `the coffee is starting to`;
  }
  brewing(){
    return `brewing to fast`;
  }
}
let mycoffe = new coffee();
// console.log(mycoffe.start());
// console.log(mycoffe.brewing());

class calculator{
  static add(a,b){
    return `${a+b}`;
  }
}
console.log(calculator.add(2,3));
