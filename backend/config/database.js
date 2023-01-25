//Connection to database
const mongoose = require("mongoose") //Importing 

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true}).then((data)=>{
    console.log(`Mongodb connected with server ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})