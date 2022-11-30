import database from "../database.json";
import Person from "./person.js";
import { save } from "./repository.js"
import TerminalController from "./terminalController.js";

const DEFAULT_LANG = "pt-BR"
const STOP_TERMINAL = ":q"

const terminalController = new TerminalController()

terminalController.initializeTerminal(database, DEFAULT_LANG)

async function mainLoop() {
  try {
    const answer = await terminalController.question()
    if( answer === STOP_TERMINAL) {
      terminalController.closeTerminal()
      console.log("Process is closed");
      return;
    }

    const person = Person.generationInstanceFromString(answer)
    terminalController.updateTable(person.formatted(DEFAULT_LANG))
    await save(person)
    return mainLoop()

  } catch(error) {
    console.error("error!!",  error);
    return mainLoop()
  }
}

await mainLoop()