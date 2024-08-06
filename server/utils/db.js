require("dotenv").config();
const mongoose  = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDB = async() => {
    try{
        await mongoose.connect(URI)
        console.log("copnn sucess to db")
    }
    catch(error){
        console.error("database connnnection failled");
        process.exit(0);
    }
}

module.exports = connectDB;