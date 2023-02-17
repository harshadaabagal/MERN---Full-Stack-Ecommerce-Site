// Used for importing express
const express = require("express") 
const app = express(); //store in a variable
const cookieParser = require("cookie-parser")

//Middlware
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
//Route Imports
const product  = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use(errorMiddleware);
app.use("api/v1", order);

module.exports = app //export app