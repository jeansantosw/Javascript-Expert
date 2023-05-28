const http = require("http")

const routes = {
  '/contact:get': (request, response) => {
    response.write('contact us page!')
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

