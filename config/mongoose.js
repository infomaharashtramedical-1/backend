const mongoose = require('mongoose');

const DB = "mongodb+srv://abhishekit365:Sunny123@jayramiti.a9oaeji.mongodb.net/JayRamIti?retryWrites=true&w=majority"


mongoose.connect(DB).then(()=>{
    console.log("DataBase Connection SuccessFull")
}).catch((err)=>console.log("No Connection Sonething Error"+err));

const db = mongoose.connection;

db.on("error",console.log.bind(console,"Error in Connecting Database"));

db.once("open",function(){
    console.log("SuccesFull Connected To the Database")
})

module.exports = db;