const  { check } = require("express-validator");
const validatorResult = require("../utils/handleValidator")

const validatorPostItem = [
  check("tipoVuelo")
    .exists()
    .notEmpty()
    .isBoolean(),
  check("paisOrigen")
    .exists()
    .notEmpty()
    .isString(),
  check("paisDestino")
    .exists()
    .notEmpty()
    .isString(),
  check("fechaSalida")
    .exists()
    .notEmpty()
    .isString(),
  check("fechaLlegada")
    .exists()
    .notEmpty()
    .isString(),
    check("cupon")
    .exists()
    .notEmpty()
    .isBoolean(),
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