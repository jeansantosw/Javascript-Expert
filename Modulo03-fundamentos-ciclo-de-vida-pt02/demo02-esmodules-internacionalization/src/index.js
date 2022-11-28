import Draftlog from "draftlog"
import chalk from "chalk"
import chalkTable from "chalk-table"

import database from "../database.json";

Draftlog(console).addLineListener(process.stdin)

const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID")},
    { field: "vehicles", name: chalk.magenta("Vehicles")},
    { field: "kmTravelled", name: chalk.cyan("KM Travaled")},
    { field: "from", name: chalk.cyan("From")},
    { field: "to", name: chalk.cyan("To")},
  ]
}

const table = chalkTable(options, database)

const print = console.draft(table)