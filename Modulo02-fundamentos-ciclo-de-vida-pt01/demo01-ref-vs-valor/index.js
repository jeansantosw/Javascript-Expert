const { deepStrictEqual } = require ("assert")

let counter = 0
let counter2 = counter

counter2++
 //??

 const item = { counter: 1}
 const item2 = item

//  item2.counter++

//  console.log("valor do item: " + item.counter)
//  console.log("valor do item 2: " + item2.counter)

 // tipo primitivo gera uma cópia em memória
 deepStrictEqual(counter, 0)
 deepStrictEqual(counter2, 1)


 //tipo de referência aponta para o endereço de memória
 // e aponta para o mesmo lugar

 item2.counter++
//  console.log(item2.counter)
 deepStrictEqual(item, {counter: 2})

 item.counter++
//  console.log(item.counter)
 deepStrictEqual(item2, {counter: 3})
