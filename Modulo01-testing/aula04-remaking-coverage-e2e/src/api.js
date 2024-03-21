const http = require("http")
const DEFAULT_USER = {
  username: "Jeansantos",
  password: "1234"
}

const { once } = require("events")

const routes = {
  '/contact:get': (request, response) => {
    response.write('contact us page!')
    return response.end()
  },
  '/login:post': async (request, response) => {
    const data = await once(request, "data")
    console.log("data", data.toString());
    return response.end()
  },
  default(request, response) {
    response.write('Page is not found')
    return response.end()
  }
}

function handle(request, response) {
  const {url, method} = request
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  return chosen(request, response)
}

const app = http.createServer(handle).listen(3000, ()=>console.log("running at 3000"))

