const Contact = require("../models/contact-model");

const contactForm  = async(req,res) =>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({msg: "msg send successssfullly"})


    }
    catch(error){
        return res.status(500).json({msg: "msg not deliveredd"})
    }
    
}
module.exports = contactForm;