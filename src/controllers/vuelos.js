const { matchedData } = require("express-validator");
const { vuelosModel } = require("../models");
const handleHttpError = require("../utils/handleError")

// este me leera todos los items
const getItems = async (req, res) => {
  try {
    const data = await vuelosModel.find({})
    res.send({data})
  } catch (error) {
    handleHttpError(res, "Error en getItems")
  }
}
const getItem = async(req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await vuelosModel.findById(id);
    res.send({data})
  } catch (error) {
    handleHttpError(res, "Error en getItem")
  }

}
// este me creara un nuevo item
const postItem = async (req, res) => {
  try {
    const body  = matchedData(req)
    const data = await vuelosModel.create(body)
    res.send({data})
  } catch (error) {
    handleHttpError(res, "Error en postItem")
  }
}
// este me actualizara un item
const putItem = async(req, res) => {
  try {
    const { id, ...body }  = matchedData(req)
    const data = await vuelosModel.findOneAndUpdate(
      id, body
    );
    res.send({data})
  } catch (error) {
    handleHttpError(res, "Error en putItem")
  }
}
// este me eliminara un item
const deleteItem = async(req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await vuelosModel.deleteOne({_id:id});
    res.send({data})
  } catch (error) {
    handleHttpError(res, "Error en deleteItem")
  }
}

module.exports = {
  getItems,
  getItem,
  postItem,
  putItem,
  deleteItem
}