const app = require("./app") //import app from app.js
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//Config
//To access the config.env file , we install dotenv
dotenv.config({path:"backend/config/config.env"});

console.log(process.env.DB_URI)
//Connecting to database
connectDatabase()


//create a server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection - Error handling for invalid connection string
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });