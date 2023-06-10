const mongoose = require("mongoose");
require("dotenv").config()

const connectDb = async () => {
    mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log(
            "Database connected: "
        );
    })
    .catch((err)=>{
        console.log("error"+err);
    })
};

module.exports = connectDb;