class Fibonacci {
  *execute ( input, current = 0, next = 1) {
    // console.count("execute")
    if(input === 0) {
      return 0
    }

    yield current //retorna o valor
    yield* this.execute(input -1, next, current + next) // Delega a função mais não retorna o valor.

  }
}

module.exports = Fibonacci