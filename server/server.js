// const express = require("express");
// const app = express();
// const authRoute = require("./router/auth-router");
// const connectDB =require("./utils/db")
// const contactRoute = require("./router/contact-router")

// //middleware
// app.use(express.json());


// app.use("/api/auth",authRoute);
// app.use("/api/form", contactRoute);

// // app.get("/", (req, res) =>{
// //     res.status(200).send("welll this is serve.js file home page")
// // })
// const port = 5000;
// connectDB().then(() =>{
//     app.listen(port, () => {
//         console.log(`server runn at port:  ${5000}`);
//     })

// })


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
// const serviceRoute = require("./router/service-router");
// const errorMiddleware = require("./middlewares/error-middleware");
const errorMiddleware =require("./middlewares/error-middleware")
// app.use(errorMiddleware);
// const bcrypt = require("bcryptjs");
const PORT = 5000;
connectDB();

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
// to get the json data in express app.
app.use(express.json());
app.use(errorMiddleware);
app.use("/api/auth",authRoute);
app.use("/api/form", contactRoute);

// app.get("/", (req, res) =>{
//     res.status(200).send("welll this is serve.js file home page")
// })
const port = 5000;
connectDB().then(() =>{
    app.listen(port, () => {
        console.log(`server runn at port:  ${port}`);
    })

})