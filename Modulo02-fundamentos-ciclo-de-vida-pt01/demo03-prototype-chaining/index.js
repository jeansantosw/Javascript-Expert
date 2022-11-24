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
Supervisor.prototype = Object.create(Employee.prototype)
// console.log(Supervisor.prototype.__proto__.__proto__ === null)
Supervisor.prototype.profitShare = () => "profitShare**"

function Manager () {}
Manager.prototype = Object.create(Supervisor.prototype)
Manager.prototype.monthlyBonuses = () => "monthlyBonuses**"

// Podemos chamar via prototype, mas se tentar chamar direto da erro
console.log('manager.prototype.salary(): ',Manager.prototype.salary())
// console.log(Manager.salary());


// Se não chamar o 'new' o primeiro __proto__ vai sempre ser
// a instancia de function , sem herdar nossa classes
// Para acessar as classes sem o 'new' pode acessar direito via
// console.log('manager.prototype__proto',Manager.prototype.__proto__)
console.log('manager.prototype__proto',Manager.prototype.__proto__)
console.log('manager.prototype__proto === Supervisor.prototype',Manager.prototype.__proto__ === Supervisor.prototype)
assert.deepStrictEqual(Manager.prototype.__proto__, Supervisor.prototype)


console.log("-----------------------");

// Quando chamamos o 'new' o __proto__ recebe o prototype atual do objeto
console.log(new Manager().__proto__, new Manager().salary());
console.log(Supervisor.prototype === new Manager().__proto__.__proto__);
assert.deepStrictEqual(Supervisor.prototype, new Manager().__proto__.__proto__)


console.log("------------------------");

const manager = new Manager()
console.log(manager.salary());
console.log(manager.profitShare());
console.log(manager.monthlyBonuses());

console.log(manager.__proto__.__proto__.__proto__.__proto__.__proto__);

assert.deepStrictEqual(manager.__proto__, Manager.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__, Employee.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__, Object.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__.__proto__, null)

console.log(Manager.prototype);
console.log(manager.__proto__);







