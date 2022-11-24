const assert = require("assert")

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.eat = () {}

console.log(Person.prototype.constructor === Person);
assert.deepStrictEqual(Person.prototype.constructor, Person)

console.log("--------");

console.log(Person.prototype.constructor.prototype === Person.prototype);
assert.deepStrictEqual(Person.prototype.constructor.prototype, Person.prototype)

// console.log(Person.prototype);