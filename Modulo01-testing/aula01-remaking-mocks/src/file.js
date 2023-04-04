const { readFile } = require('fs/promises')

class File {
  static async csvJSON(filePath) {
    const result = await readFile(filePath, 'utf8')
    console.log({result});
  }
}

module.exports = File