const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

;(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-valid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/theeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    expected = [
      {
        "id": 123,
        "name": "Jean Santos",
        "profession": "Javascript Specialist",
        "birthDay": 1990
      },
      {
        "id": 324,
        "name": "Maria Santana",
        "profession": "web developer",
        "birthDay": 1998
      },
      {
        "id": 485,
        "name": "Mauricio Cabral",
        "profession": "AWS",
        "birthDay": 1984
      }
    ]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

})()
