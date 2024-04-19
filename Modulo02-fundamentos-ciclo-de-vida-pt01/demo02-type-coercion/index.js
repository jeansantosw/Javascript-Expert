

// Console.assert compara os valores como o deepStrictEqual
console.assert(String(123) === "123", "explicit convertion to string")

// A expressão 123 + "" retorna uma string nesse caso está fazendo uma comparação === 
console.assert(123 + "" === "123", "implicit convertion to string")

// Quando usamos o OU || se os dois forem verdadeiros ele sempre retorna o primeiro
console.assert("hello" || 1 === "hello", "return always first result of two true")

// Quando usamos o E && caso os dois forem verdadeiros ele sempre retorna o ultimo.
console.assert("hello" && 123 === 123, "return always first result of two true")


const item = {
  name: "Jean Santos",
  age: 30,
  // String: 1 se não for primitivo, chama o valueOf
  toString() {
    return `name: ${this.name}, age: ${this.age}`
  },
  // Number: 1 se não for primitivo, chama o toString
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
    return type[coercionType] || type.string 
  } 
}

// console.log("String: ", String(item));
// console.log("Number: ", Number(item));

//-----------------------------------

console.assert(item + 0 === '{"name":"Jean Santos","age":30}0')
console.log(item + 0)


// const r = "Hello" || 1
// console.log("r: ", r)

// if(r) {
//   console.log("in if");
// }