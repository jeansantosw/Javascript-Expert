const { describe, it, before } = require('mocha')
const CarService = require('../../src/service/carService')

const { join } = require('path')

const carDataBase = join(__dirname, '../../database/', 'cars.json')

describe('carService suite tests!', () => {
  let carService = {}

  before(() => {
    carService = new CarService({
      car: carDataBase
    })
  })

  it('give a carCategory it should return an avaliable car', async () => {
    const result = await carService.test("e929bccb-d0c3-498b-9f7f-16c398d05c0e")
    console.log('result: ', result);
  })
})