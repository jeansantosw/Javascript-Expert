"use strict";module.export({default:()=>Person});class Person {
  constructor({id, vehicles, kmTraveled, from, to}) {
    this.id = id,
    this.vehicles = vehicles,
    this.kmTraveled = kmTraveled,
    this.from = from,
    this.to = to
  }

  formatted(language) {
    const mapData = (date) => {
      const [year, month, day] = date.split("-").map(Number)
      // Datas em js começam do zero por isso month-1.
      return new Date(year, month -1, day)
    }

    return {
      id: Number(this.id),
      vehicles: new Intl
        .ListFormat(language, {style: "long", type: "conjunction"})
        .format(this.vehicles),
      kmTraveled: new Intl
        .NumberFormat(language, {style: "unit", unit: "kilometer"})
        .format(this.kmTraveled),
      from: new Intl
        .DateTimeFormat(language, {month: "long", day: "2-digit", year: "numeric"})
        .format(mapData(this.from)),
      to: new Intl
        .DateTimeFormat(language, {month: "long", day: "2-digit", year: "numeric"})
        .format(mapData(this.to))
    }
  }
  
  //  Método static é usado por não ser preciso nenhuma informação da class
  static generationInstanceFromString(text) {
    const EMPTY_SPACE = ' '
    const [id, vehicles, kmTraveled, from, to] = text.split(EMPTY_SPACE)
    const person = new Person({
      id,
      kmTraveled,
      from,
      to,
      vehicles: vehicles.split(',')
    })

    return person
  }
}