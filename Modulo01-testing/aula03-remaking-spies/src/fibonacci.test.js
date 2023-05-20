const {createSandbox} = require("sinon")
const Fibonacci = require("./fibonacci")
const assert = require("assert")
const sinon = createSandbox()

const fibonacci = new Fibonacci()

;(async() =>{
  {
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )
    for(const sequencia of fibonacci.execute(5)){
    }
    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)

    const { args } = spy.getCall(2)
    const expctedParms = [3, 1, 2]
    assert.deepStrictEqual(args, expctedParms, "Array is not equals")
  }
})()