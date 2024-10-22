const validate = (schema) =>async (req, res, next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err){
        const message = err.errors[0].message;
        //  res.status(400).json({msg: "validation failedd"})
        next(message)
    }
}

module.exports = validate;