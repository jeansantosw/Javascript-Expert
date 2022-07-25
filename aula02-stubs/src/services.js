const http = require ("https")
const { resolve } = require("path")

class Services {
  async makeRequest(url) {
    return new Promise((resolve, reject) =>{
      http.get(url, response => {
        response.on("data", data => resolve(data))
        response.on("error", reject)
      })
    })
  }
}


;(async =() => {

})()