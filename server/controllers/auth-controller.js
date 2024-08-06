const User = require("../models/user-model")
// const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try{
        res.status(200).send("welll this is auth-aouter.js file home page");
    }
    catch(error){
        console.log(error);
    }
};
const register = async (req, res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password}= req.body;
        const userExist = await  User.findOne({email})

        if(userExist){
            return res.status(400).json({msg: "email alreadyy exist"});
        }
        //methiod 1 11vid
        // const saltRound =10;
        // const hash_password  = await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({     username,
            email,
            phone,
            password, })
        
        // res.status(200).json("welll this is auth-aouter.js file register page");
        res.status(201).json({message :  "registration successfull", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }
    catch(error){
        res.status(500).json("intern server error")
        console.log(error);
    }
};

const login =async (req,res) => {
    try{
        const { email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({message: "Invalidd cred"});
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if(user){
            res.status(200).json({message : "loginn successfull", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{
            res.status(400).json({message: "Invalid email or pass"})
        }

    }
    catch(error){
        res.status(500).json("internal server error");
    }
}

module.exports = {home,register,login};