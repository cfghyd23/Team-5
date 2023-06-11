const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// const dotenv = require('dotenv');
const dotenv = require("dotenv").config;
//const connectDb = require("./config/dbConnection");
//connectDb();
const app = express();
const connectDb = require("./config/dbConnection");
connectDb();
//const errorHandler = require("./middleware/errorHandler");
const port = 5000;//creater server on port 5000
//app.use(express.json());//to parse the input data n print it

//app.use("/api/contacts", require('./routes/contactRoutes'));
//app.use("/api/users", require('./routes/userRoutes')); 
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
const internRouter = require('./routes/internRoutes')
const adminRouter = require('./routes/admin_routes')
//app.use(errorHandler);
// Dummy data
app.use("/intern" , internRouter)
app.use("/admin" , adminRouter)
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    console.log(process.env.SMPT_MAIL)
    const transporter = nodemailer.createTransport({
        // host: process.env.SMPT_HOST,
        // port: process.env.SMPT_PORT,
        // service: process.env.SMPT_SERVICE,
        host: "smtp.gmail.com",
        port: 465,
        auth:{
            user: "veabanga.vb@gmail.com",
            pass: "fasllqwuokjxvczp",
        },
    });

    const mailOptions = {
        from: "veabanga.vb@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

const data = [
    { cause: 'Cause 1', threshold: 100, curProg: 20 },
    { cause: 'Cause 2', threshold: 200, curProg: 55 },
    { cause: 'Cause 3', threshold: 300, curProg: 95 },
  ];

  app.get('/data', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

app.post("/submit", (req, res) => {
    //save to db
    if(req.body.progress == 20 || req.body.progress == 50 || req.body.progress==90 ){
    //email
    //sendEmail()
    try {
        sendMail({
          email: req.body.email,
          subject: `Hi you have raised ${req.body.progress}% funds`,
          message: `Find Out how you can raise more funds funds to reach your ultimate goal with these tips.`
        //    ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:-,` 
        //   ${seller.email} to activate your shop!`
        });
      } catch (error) {
        console.log(error)
        // return next(new ErrorHandler(error.message, 500));
      }
    }
})
