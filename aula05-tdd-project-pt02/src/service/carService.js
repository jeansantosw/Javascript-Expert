const BaseRepository = require('../respository/base/baseRepository')

class CarService {
  constructor ({car}){
    this.carRepository = new BaseRepository({file: car})
  }

  test() {
    return this.carRepository.find()
  }
}

module.exports = CarService;