//Connection to database
const mongoose = require("mongoose") //Importing 

const connectDatabase = () => {
    // mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true})

    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log(`Mongodb connected with server ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase