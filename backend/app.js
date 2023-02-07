// Used for importing express
const express = require("express") 



const app = express(); //store in a variable

//Middlware
const errorMiddleware = require("./middleware/error");

app.use(express.json())

//Route Imports
const product  = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use(errorMiddleware)

module.exports = app //export app