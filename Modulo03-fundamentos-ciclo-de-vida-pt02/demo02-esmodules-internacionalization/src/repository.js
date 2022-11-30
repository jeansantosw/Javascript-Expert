import { writeFile, readFile } from 'fs/promises'

export const save = async(data) => {
  // com o modulos não temos o __filename __dirname
  // então passamos a usar dessa forma, porém podemos melhorar
  const databaseFile = new URL('./../database.json', import.meta.url)
  const currentData = JSON.parse((await readFile(databaseFile, "utf8")))
  currentData.push(data)
  await writeFile(databaseFile, JSON.stringify(currentData))
}