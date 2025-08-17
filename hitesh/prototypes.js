let computer = {cpu:12}
let lenevo = {
  screen:"HD",
  __proto__ : computer  
};
let tomHardware = {}

console.log(`computer `,lenevo.__proto__);

let genericcar ={tyres : 4}
let tesla = {
  driver:"ai",
}
Object.setPrototypeOf(tesla,genericcar)
console.log(`genericcar`,tesla.getPrototypeOf);