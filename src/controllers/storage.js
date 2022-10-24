const {  } = require("../models");

// este me leera todos los items
const getItems = async (req, res) => {
  const data = await vuelosModel.find({})
  res.send({data})
}
const getItem = (req, res) => {
  const data = ["Hola", "mundo"]
  res.send({data})
}
// este me creara un nuevo item
const postItem = async (req, res) => {
  const { body }  = req
  const data = await vuelosModel.create(body)
  console.log(data)
  res.send({data})
}
// este me actualizara un item
const putItem = (req, res) => {

}
// este me eliminara un item
const deleteItem = (req, res) => {

}

module.exports = {
  getItems,
  getItem,
  postItem,
  putItem,
  deleteItem
}