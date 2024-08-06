require("dotenv").config();
const bcrypt = require("bcryptjs");

const mongoose =require("mongoose");
const jwt = require("jsonwebtoken");
const user =this;
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    phone : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
})

userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId: this.username.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn: "30d",
        }
    )

    }
    catch(error){
        console.log(error);
    }
}

userSchema.methods.comparePassword =async function(password){
   
    return bcrypt.compare(password, this.password)
}

//save mylb db me store hone se ohle ye run hoga
userSchema.pre('save', async function(next) {
    console.log("premethod",this);
    const user =this;
    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound =await bcrypt.genSalt(10);
        const hash_password  = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    }
    catch(error){
        next(error);
    }
})

const User =  new mongoose.model("User",userSchema);

module.exports =User;