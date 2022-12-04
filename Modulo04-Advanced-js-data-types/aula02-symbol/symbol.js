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