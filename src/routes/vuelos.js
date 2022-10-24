const express = require("express");
const router = express.Router();
const { getItems, getItem, postItem, putItem, deleteItem } = require("../controllers/vuelos")
const { validatorPostItem, validatorGetItem } = require("../validators/vuelos")
const custonHeader = require("../middleware/customHeader")
// registro de todos los elementos
router.get("/", getItems);
// registro de detalles
router.get("/:id", validatorGetItem, getItem)
// creacion de un nuevo elemento
router.post("/", validatorPostItem, postItem);

router.put("/:id", validatorGetItem, validatorPostItem, putItem);

router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router 