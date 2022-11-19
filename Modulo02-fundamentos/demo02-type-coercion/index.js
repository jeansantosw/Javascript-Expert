

console.assert(String(123) === "123", "explicit convertion to string")

console.assert(123 + "" === "123", "implicit convertion to string")

console.assert("hello" || 1 === "hello", "return always first result of two true")

console.assert("hello" && 123 === 123, "return always first result of two true")


const item = {
  name: "Jean Santos",
  age: 30,
  // String: 
  toString() {
    return `name: ${this.name}, age: ${this.age}`
  },
  valueOf() {
    return 007
  },

  //tem prioridade na ordem
  [Symbol.toPrimitive](coercionType){
    console.log("Trying to covert to: ", coercionType)
    const type = {
      string: JSON.stringify(this),
      number: 007
    }
    return type[coercionType]
  }
}

// console.log("String: ", String(item));
// console.log("Number: ", Number(item));

//-----------------------------------

console.assert(item + 0 === '{"name":"Jean Santos","age":30}0')


// const r = "Hello" || 1
// console.log("r: ", r)

// if(r) {
//   console.log("in if");
// }