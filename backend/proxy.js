const express = require("express");//header of express
const cors = require("cors");
//const dotenv = require("dotenv").config;
//const connectDb = require("./config/dbConnection");
//connectDb();
const app = express();
//const errorHandler = require("./middleware/errorHandler");
const port = 2555;//creater server on port 5000
//app.use(express.json());//to parse the input data n print it

//app.use("/api/contacts", require('./routes/contactRoutes'));
//app.use("/api/users", require('./routes/userRoutes')); 

//app.use(errorHandler);
// Dummy data
const data = [
    { cause: 'Cause 1', threshold: 100, curProg: 20 },
    { cause: 'Cause 2', threshold: 200, curProg: 55 },
    { cause: 'Cause 3', threshold: 300, curProg: 95 },
  ];
//   app.use(
//     cors({
//       origin: "http://localhost:5000",
//       credentials: true,
//     }));
  // Route to retrieve the dummy data
  app.get('/data', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

// app.post("/submit", (req, res) => {
//     try{

//     }catch(ex ) {

//     }
//     //save to db
//     //email
//     //sendEmail()
// })