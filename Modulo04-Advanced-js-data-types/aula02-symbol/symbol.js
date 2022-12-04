const assert = require ('assert')


// key

const uniqueKey = Symbol("newUserName")
const user = {}

user["userName"] = 'value for normal Object'
user[uniqueKey] = 'value for Symbol'

// console.log('getting normal Objects: ', user.userName);

// // Sempre único em nível de endereço de memória
// console.log('getting notmal objects: ', user[Symbol("userName")]);
// console.log('getting notmal objects: ', user[uniqueKey]);

assert.deepStrictEqual(user.userName, 'value for normal Object')
assert.deepStrictEqual(user[Symbol("newUserName")], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for Symbol')