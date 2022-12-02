const assert = require ('assert')

function* calculation(arg1, arg2) {
    yield arg1 * arg2
}

function *main() {
  yield 'Hello'
  yield '-'
  yield 'World'
  yield* calculation(2,2)
}

// GENERATORS é a melhor forma de fazer uma função quando se precisa
// retornar dados sobre demanda, os generators tem como caracteristica 
// o * na função e o seu return é o yield

const generator = main()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


assert.deepStrictEqual(generator.next(), {value: 'Hello', done: false})
assert.deepStrictEqual(generator.next(), {value: '-', done: false})
assert.deepStrictEqual(generator.next(), {value: 'World', done: false})
assert.deepStrictEqual(generator.next(), {value: 4, done: false})
assert.deepStrictEqual(generator.next(), {value: undefined, done: true})

assert.deepStrictEqual(Array.from(main()), ['Hello','-','World',4])
assert.deepStrictEqual([...main()], ['Hello','-','World',4])

// --------------async-------------

const { readFile, stat, readdir } = require('fs/promises')

function* promisified() {
  yield readFile(__filename)
  yield Promise.resolve('Hey Dude')
}

// console.log('PROMISIFIED',Array.from(promisified()));
// console.log('PROMISIFIED', [...promisified()]);
// Promise.all([...promisified()]).then(result => console.log('PROMISIFIED: ',result))

// ;(async () => {
//   for await (const item of promisified()) {
//     console.log('PROMISIFIED: ', item.toString());
//   }
// })()


async function* systemInfo() {
  const file = await readFile(__filename)
  yield { file: file.toString() }

  const { size } = await stat(__filename)
  yield {size}

  const dir = await readdir(__dirname)
  yield { dir }
}

;(async () => {
  for await(const item of systemInfo()) {
    console.log('SystemInfo: ', item);
  }
})()
