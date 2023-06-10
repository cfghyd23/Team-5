const mongoose =require('mongoose')

const Mongoose =require('mongoose').Mongoose
const instance1= new Mongoose()

const schema =mongoose.Schema
const CONNECTION_STRING = "mongodb+srv://cfgteam5:letswin@cluster10.chrhucb.mongodb.net/CodeForGood?retryWrites=true&w=majority"
const connect = instance1.connect(CONNECTION_STRING)

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

var Admin = instance2.model('Admin' , adminSchema)

module.exports =Admin
