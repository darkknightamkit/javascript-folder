function person(name,age){
    this.name = name
    this.age = age;
}

function car(tyres,gear){
  this.tyres = tyres;
  this.gear = gear;
}

let mycar = new car("8","3");
// console.log(mycar);

let newcar = new person("a","b");
// console.log(newcar);

function tea(type){
  this.type = type;
  this.describe = function(){
    return `this is a cup of ${this.type}`
  }
}
let lemontea = new tea("lemon tea");
// console.log(lemontea.describe());

function travel(city){
   this.city = city;
   this.distance = function(){
      return `this is far ${this.city}`
   };
}
let london = new travel("567");
// console.log(london.distance());

function animal(legs){
   this.legs = legs;
}
animal.prototype.sound = function(){
 return `${this.legs} makes sound`;
};
let dog = new animal("Dog");
console.log(dog.sound());

function drink (name){
  if(!new.target){
    throw new Error("drink must be called with new keyword");
  }
this.name = name ;

}
let tea = new drink("tea")
let coffee = drink("coffee");