function person (name){
    this.name = name;
}
person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

const alice = new person("Alice");
alice.greet(); 

const bob = new person("Bob");
bob.greet(); 