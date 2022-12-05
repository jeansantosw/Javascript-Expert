const assert = require('assert')

// ---- key
const uniqueKey = Symbol('userName')
const user = {}

user['userName'] = 'value for normal Object'
user[uniqueKey] = 'value for Symbol'

// console.log('getting normal Objects: ', user.userName);

// // Sempre único em nível de endereço de memória
// console.log('getting notmal objects: ', user[Symbol("userName")]);
// console.log('getting notmal objects: ', user[uniqueKey]);

assert.deepStrictEqual(user.userName, 'value for normal Object')
assert.deepStrictEqual(user[Symbol('userName')], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for Symbol')

// É difícil de pegar mas não é secreto
// console.log('symbol: ', Object.getOwnPropertySymbols(user)[0]);

assert.deepStrictEqual(Object.getOwnPropertySymbols(user)[0], uniqueKey)

// byPass - má prática (nem tem no codebase do node)

user[Symbol.for('password')] = 123
assert.deepStrictEqual(user[Symbol.for('password')], 123)

// well known Symbols
const obj = {
  [Symbol.iterator]: () => ({
    items: ['c', 'b', 'a'],
    next() {
      return {
        done: this.items.length === 0,
        // remove o último item do array
        value: this.items.pop(),
      }
    },
  }),
}

// for(const item of obj) {
//   console.log('item', item);
// }

assert.deepStrictEqual([...obj], ['a', 'b', 'c'])

// ------------------------- ESTUDAR -------------------------

const kItems = Symbol('kItems')
class MyDate {
  constructor(...args) {
    this[kItems] = args.map(arg => new Date(...arg))
  }

  [Symbol.toPrimitive](coercionType) {
    if (coercionType !== 'string') throw new TypeError()

    const itens = this[kItems].map(item =>
      new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      }).format(item)
    )
    return new Intl.ListFormat('pt-BR', {
      style: 'long',
      type: 'conjunction',
    }).format(itens)
  }

  *[Symbol.iterator]() {
    for (const item of this[kItems]) {
      yield item
    }
  }

  async *[Symbol.asyncIterator]() {
    const timeout = ms => new Promise( r => setTimeout(r, ms))
    for(const item of this[kItems]) {
      await timeout(100)
      yield item.toISOString()
    }
  }

  get [Symbol.toStringTag]() {
    return 'WHAT?'
  }
}

const myDate = new MyDate([2020, 03, 01], [2018, 02, 02])

const expectedDates = [new Date(2020, 03, 01), new Date(2018, 02, 02)]

// console.log('myDate', myDate);

assert.deepStrictEqual(Object.prototype.toString.call(myDate), '[object WHAT?]')
// console.log('myData + 1 ', myData + 1); TESTE DE ERRO MYDATA
assert.throws(() => myDate + 1, TypeError)

// Coerção explicita para chamar o toString
// console.log('String(myData)', String(myDate ));
assert.deepStrictEqual(
  String(myDate),
  '01 de abril de 2020 e 02 de março de 2018'
)


// Immplementar o interator

assert.deepStrictEqual([...myDate], expectedDates)

// ;(async() => {
//   for await(const item of myDate) {
//     console.log('asyncIterator', item);
//   }
// })()

;(async()=> {
  const dates = await Promise.all([...myDate])
  assert.deepStrictEqual(dates, expectedDates)
})()

// ------------------------- END -------------------------
