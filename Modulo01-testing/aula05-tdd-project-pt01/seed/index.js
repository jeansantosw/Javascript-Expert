const faker = require('faker')
const { join } = require('path')
const seederBaseFolder = join(__dirname, "../", "database")
const { writeFile } = require('fs/promises')

const Car = require('../src/entities/car')
const Customer = require('../src/entities/customer')
const CarCategory = require('../src/entities/carCategory')


const COUNT_AMOUNT = 2

const carCategory = new CarCategory({
  id: faker.random.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100)
})


const cars = []
const customers = []


for(let index = 0; index <= COUNT_AMOUNT; index ++) {


  const car = new Car({
    id: faker.random.uuid(),
    name: faker.vehicle.model(),
    releaseYear: faker.date.past().getFullYear(),
    gasAvaliable: true,
    avaliable: true
  })
  carCategory.carIds.push(car.id)
  cars.push(car)



  const customer = new Customer({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: faker.random.number({min: 18, max: 50})
  })
  customers.push(customer)
}



const write = (filename, data) => { writeFile(join(seederBaseFolder, filename), JSON.stringify(data))}

;(async () => {
  await write('cars.json', cars)
  await write('customers.json', customers)
  await write('carCategorys.json', [carCategory])

  console.log('cars => ', cars)
  console.log('customers.json => ', customers);
  console.log('carCategorys => ', carCategory)
})()