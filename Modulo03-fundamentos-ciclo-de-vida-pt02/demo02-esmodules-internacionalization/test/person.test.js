import mocha from 'mocha'
const { describe, it } = mocha
import chai from 'chai'
const { expect } = chai

import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generationInstanceFromString(
      '1 Bike,Carro 200000 2020-01-01 2020-02-02'
    )
    const expected = {
      from: '2020-01-01',
      to: '2020-02-02',
      vehicles: ['Bike','Carro'],
      kmTraveled: '200000',
      id: '1',
    }

    expect(person).to.be.deep.equal(expected)
  })

  it('should format values', () => {
    const person = new Person({
      from: '2020-01-01',
      to: '2020-02-02',
      vehicles: ['Bike','Carro'],
      kmTraveled: '200000',
      id: '1',
    })
    const result = person.formatted("pt-BR")

    const expected = {
      id: 1,
      vehicles: 'Bike e Carro',
      kmTraveled: '200.000 km',
      from: '01 de janeiro de 2020',
      to: '02 de fevereiro de 2020'
    }

    // console.log("person test ", person.formatted(result));

    expect(result).to.be.deep.equal(expected)
  })
})

