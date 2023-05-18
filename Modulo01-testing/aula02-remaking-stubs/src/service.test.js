const Service = require("./service");
const { createSandbox } = require("sinon")
const sinon = createSandbox()
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"
const assert = require("assert")

const mocks = {
  tatooine: require("../mocks/tatooine.json"),
  alderaan: require("../mocks/alderaan.json")
}


;(async () => {
// {
//   vai para internet
//   const service = new Service()
//   const dados = await service.makeRequest(BASE_URL_2)
//   console.log("dados", JSON.stringify(dados));
// }

  const service = new Service()

  const stub = sinon.stub(service, service.makeRequest.name)

  stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.tatooine)

  stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.alderaan)


  {
    const expected = {
      name: "Tatooine",
      surfaceWater: "1",
      appeardIn: 5
    }

    const results = await service.getPlanets(BASE_URL_1)
    assert.deepStrictEqual(expected, results)
  }

})()