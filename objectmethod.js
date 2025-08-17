let emp ={
  id : 101,
  name : "amit",
  age : 24
};

let keys =Object.keys(emp);
console.log(keys);

let values =Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

Object.freeze(emp);  // not able to add and remove

Object.seal(emp); // update allowed but entries nahi hongi