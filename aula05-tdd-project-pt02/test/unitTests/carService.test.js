const { describe, it, before } = require('mocha')
const CarService = require('../../src/service/carService')

const { join } = require('path')
const assert = require('assert')

const carDataBase = join(__dirname, '../../database/', 'cars.json')

describe('carService suite tests!', () => {
  let carService = {}

  before(() => {
    carService = new CarService({
      car: carDataBase
    })
  })

  it('give a carCategory it should return an avaliable car', async () => {
    const result = await carService.getAvaliableCar()
    const expected = {}
    assert.deepStrictEqual(result, expected)
  })
})