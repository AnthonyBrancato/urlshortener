const RandExp = require('randexp')

const alphanumeric = () => {
  let result = ''
  const characters = new RandExp(/([a-z]\w{0,2}[A-Z])([0-9]\w{0,3})/i).gen()

  result += characters

  return result
}

module.exports = alphanumeric