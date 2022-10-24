require("dotenv").config({path:'./src/.env'});
const express = require("express");
const dbConnect = require("./config/mongo.js")

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// aquí invoco a las rutas
app.use("/api", require("./routes"))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`) 
})

dbConnect();