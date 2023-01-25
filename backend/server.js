const app = require("./app") //import app from app.js

const dotenv = require("dotenv")

//Config
//To access the config.env file , we install dotenv
dotenv.config({path:"backend/config/config.env"});

//create a server
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})