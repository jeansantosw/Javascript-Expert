const BaseRepository = require('../respository/base/baseRepository')

class CarService {
  constructor ({car}){
    this.carRepository = new BaseRepository({file: car})
  }

  test( id ) {
    return this.carRepository.find(id)
  }
}

module.exports = CarService;