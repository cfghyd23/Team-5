const express = require("express");//header of express
//const dotenv = require("dotenv").config;
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();
//const errorHandler = require("./middleware/errorHandler");
const port = 5000;//creater server on port 5000
//app.use(express.json());//to parse the input data n print it

//app.use("/api/contacts", require('./routes/contactRoutes'));
//app.use("/api/users", require('./routes/userRoutes')); 

//app.use(errorHandler);
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
