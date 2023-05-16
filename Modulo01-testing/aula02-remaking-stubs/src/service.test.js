const Service = require("./service");

const BASE_URL_1 = "https://pokeapi.co/api/v2/pokemon/ditto"

;(async () => {
  {
  const service = new Service()
  const dados = await service.makeRequest(BASE_URL_1)
  console.log("dados", dados);
}
})()