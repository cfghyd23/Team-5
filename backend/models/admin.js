const mongoose =require('mongoose')
require("dotenv").config()
const Mongoose =require('mongoose').Mongoose
const instance1= new Mongoose()

const schema =mongoose.Schema
const connect = instance1.connect(process.env.CONNECTION_STRING)

const adminSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phno:{
        type:String,
        required:true,
    },
    dob:{
        type : Date,
        required:true,
    },
    adress:{
        type:String,
        required:true,
    }
})

var Admin = instance1.model('Admin' , adminSchema)

module.exports =Admin
