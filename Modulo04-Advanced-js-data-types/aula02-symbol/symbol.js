const assert = require ('assert')


// ---- key
const uniqueKey = Symbol("userName")
const user = {}


user["userName"] = 'value for normal Object'
user[uniqueKey] = 'value for Symbol'

// console.log('getting normal Objects: ', user.userName);

// // Sempre único em nível de endereço de memória
// console.log('getting notmal objects: ', user[Symbol("userName")]);
// console.log('getting notmal objects: ', user[uniqueKey]);

assert.deepStrictEqual(user.userName, 'value for normal Object')
assert.deepStrictEqual(user[Symbol("userName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for Symbol')

// É difícil de pegar mas não é secreto
// console.log('symbol: ', Object.getOwnPropertySymbols(user)[0]);

assert.deepStrictEqual(Object.getOwnPropertySymbols(user)[0], uniqueKey)

// byPass - má prática (nem tem no codebase do node)

user[Symbol.for('password')] = 123
assert.deepStrictEqual(user[Symbol.for('password')], 123)