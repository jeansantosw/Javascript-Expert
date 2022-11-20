const assert = require("assert")

const obj = {}
const arr = []
const fn = () => {}

// Internamente objetos literais viram funções explicitas

console.log('new Object() is {}?: ', new Object().__proto__ === {}.__proto__)
assert.deepStrictEqual(new Object().__proto__, {}.__proto__)

// __proto__ é a referencia do objeto que possui as propriedades nele
console.log('obj.__proto__ === Object.prototype: ',obj.__proto__ === Object.prototype)
assert.deepStrictEqual(obj.__proto__,Object.prototype)

console.log('arr.__proto__ === Array.prototype: ', arr.__proto__ === Array.prototype)
assert.deepStrictEqual(arr.__proto__, Array.prototype)

console.log('fn.__proto__ === Function.prototype: ', fn.__proto__ === Function.prototype)
assert.deepStrictEqual(fn.__proto__, Function.prototype)


// O __proto__ de Object.prototype é null
console.log('obj.__proto__.__proto__ === null :', obj.__proto__.__proto__ === null)

// ------------

console.log("------------------- // ---------------------")



function Employee() {}
Employee.prototype.salary = () => "salary**"

// console.log(Employee.prototype.salary())
// console.log(Employee.prototype)

function Supervisor() {}
// herda a instancia de employee
Supervisor.prototype = Object(Employee.prototype)
// console.log(Supervisor.prototype.__proto__.__proto__ === null)
Supervisor.prototype.profitShare = () => "profitShare**"

function Manager () {}
Manager.prototype = Object.create(Supervisor.prototype)
Manager.prototype.monthlyBonuses = () => "monthlyBonuses"

// Podemos chamar via prototype, mas se tentar chamar direto da erro

console.log(Manager.prototype.salary())


