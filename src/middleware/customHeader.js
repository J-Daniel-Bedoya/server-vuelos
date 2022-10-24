const customHeader = (req, res, next) => {
  try {
    
    const apiKey = req.headers.api_key;
    if(apiKey === "vuelos_01"){
      next()
    }else{
      res.status(403)
      res.send({error: "LA API_KEY NO ES CORRECTA"})
    }
  } catch (error) {
    res.status(403)
    res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOMHEADER"})
  }
} 

module.exports = customHeader;