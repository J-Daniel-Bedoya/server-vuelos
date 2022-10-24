const express = require("express");
const router = express.Router();

const uploadMiddleware = require("../utils/hanleStorage")


router.post("/",uploadMiddleware.single("myfile"), )

module.exports = router