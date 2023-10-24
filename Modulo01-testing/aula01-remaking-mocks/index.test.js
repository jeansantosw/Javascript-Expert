const File = require("./src/file")
const { error } = require("./src/constants")
const assert = require("assert")

//IFEE
;(async () => {
    // variaveis criadas nesse bloco, só são validas durante sua execução
  {
    const filePath = './mocks/empytFile-invalid.csv'
    // console.log('filePath:1 ', filePath);
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/invalid-header.csv'
    // console.log('filePath:2 ', filePath);
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    // console.log('filePath:3 ', filePath);
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    // console.log('filePath:4 ', filePath);
    const expected = [
      {
        id: 123,
        name: "Jean Santos",
        profession: "Javascript",
        age: 33
      },
      {
        id: 324,
        name: "Maria Santana",
        profession: "web developer",
        age: 25
      },
      {
        id: 485,
        name: "Mauricio Cabral",
        profession: "AWS",
        age: 39
      },
    ]
    const result = await File.csvJSON(filePath)
    assert.deepEqual(result, expected)
  }

})()