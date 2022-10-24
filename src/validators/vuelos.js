const  { check } = require("express-validator");
const validatorResult = require("../utils/handleValidator")

const validatorPostItem = [
  check("tipoVuelo")
    .exists()
    .notEmpty(),
  check("paisOrigen")
    .exists()
    .notEmpty(),
  check("paisDestino")
    .exists()
    .notEmpty(),
  check("fechaSalida")
    .exists()
    .notEmpty(),
  check("fechaLlegada")
    .exists()
    .notEmpty(),
    check("cupon")
    .exists()
    .notEmpty(),
  check("totalPersonas")
    .exists()
    .notEmpty(),
  check("totalPersonas.adultos")
    .exists()
    .notEmpty(),
  check("totalPersonas.niños")
    .exists()
    .notEmpty(),
  check("totalPersonas.bebes")
    .exists()
    .notEmpty(),
    (req, res, next) => {
      return validatorResult(req, res, next);
    }
]
const validatorGetItem = [
  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
      return validatorResult(req, res, next);
    }
]

module.exports = { validatorPostItem, validatorGetItem };