const handleHttpError = (res, message = "Algo ha ocurrido", code = 403) => {
  res.status(code)
  res.send({error: message})
}

module.exports = handleHttpError;