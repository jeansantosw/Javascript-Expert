const { describe, it } = require("mocha")
const request = require("supertest")
const app = require("./api")


describe("API suite test", () => {
  describe("/contact", () => { 
    it("Should request the contact page end return HTTP Status 200", async() => {
      const response = await request(app)
        .get("/contact")
        .expect(200)
      console.log("response", response)
    })
  })
})