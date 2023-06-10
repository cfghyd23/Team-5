const express = require("express");//header of express
//const dotenv = require("dotenv").config;
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();
//const errorHandler = require("./middleware/errorHandler");
const port = 5000;//creater server on port 5000
app.use(express.json());//to parse the input data n print it
const internRouter = require('./routes/internRoutes')
const adminRouter = require('./routes/admin_routes')
//app.use("/api/contacts", require('./routes/contactRoutes'));
//app.use("/api/users", require('./routes/userRoutes')); 
app.use("/intern" , internRouter)
app.use("/admin" , adminRouter)
//app.use(errorHandler);
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});