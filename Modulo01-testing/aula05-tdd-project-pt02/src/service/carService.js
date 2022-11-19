const BaseRepository = require('../respository/base/baseRepository')

class CarService {
  constructor ({car}){
    this.carRepository = new BaseRepository({file: car})
  }

  async getAvaliableCar( carCategory) {
    return null
  }
}

module.exports = CarService;