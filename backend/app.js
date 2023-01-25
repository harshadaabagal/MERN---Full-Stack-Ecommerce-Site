// Used for importing express
const express = require("express") 

const app = express(); //store in a variable

app.use(express.json())

//Route Imports
const product  = require("./routes/productRoute");

app.use("/api/v1", product);


module.exports = app //export app