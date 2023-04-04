const File = require("./src/file")
const { error } = require("./src/constants")
const assert = require("assert")

//IFEE
;(async () => {
    // variaveis criadas nesse bloco, só são validas durante sua execução
  {
    const filePath = './mocks/empytFile-invalid.csv'
    // console.log('filePath: ', filePath);
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvJSON(filePath)
    await assert.rejects(result, expected)
  }
})()