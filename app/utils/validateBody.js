
function hasAllProperties(req, props) {
  const body = {...req}
  let counter = 0
  const keys = Object.keys(props)
  keys.forEach(prop => {
    if(body.hasOwnProperty(prop)) {
      const isDefined = body[prop] !== null && body[prop] !== undefined
      if(isDefined) {
        if(props[prop].pattern.test(body[prop].toString())) {
          counter++
        }
      }
    }
  })
  return counter === keys.length
}

const VALIDATOR_BODY ={
  isNumber: /^\d+$/,
  isValidYear: /^2\d{3}$/,
  isValidText: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚ\,\_\-]+( [a-zA-Z0-9áéíóúñÁÉÍÓÚ\,\_\-]+)*$/,
  isValidDNI: /^\d{10}$/,
  isValidNAME: /^[a-zA-ZáéíóúñÁÉÍÓÚ]+( [a-zA-ZáéíóúñÁÉÍÓÚ]+)*$/,
  isValidLASTNAME: /^[a-zA-ZáéíóúñÁÉÍÓÚ]+( [a-zA-ZáéíóúñÁÉÍÓÚ]+)*$/,
  isDate: /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/
}

module.exports = {
  VALIDATOR_BODY,
  hasAllProperties
}
