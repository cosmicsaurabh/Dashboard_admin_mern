const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/auth-controller")
//also a way
const authcontrollers = require("../controllers/auth-controller")
const signupSchema =require("../validators/auth-validator");

const validate = require("../middlewares/validate-middleware")
//yha pe route ki jagah getpost vgaira
// router.get("/", (req,res) => {
//     res.status(200).send("welll this is auth-aouter.js file home page");
// });
// this is withoput auth-controller
// router.route("/").get((req,res) => {
//     res.status(200).send("welll this is auth-aouter.js file home page");
// });
//with auth
// router.route("/").get(home);
// router.route("/register").get(register);
router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(authcontrollers.login);
// router.route("/register").get((req,res) => {
//     res.status(200).send("welll this is auth-aouter.js  regist page");
// });


module.exports =router;
