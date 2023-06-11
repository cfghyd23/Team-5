const mongoose =require('mongoose')
require("dotenv").config()
const Mongoose =require('mongoose').Mongoose
const instance2= new Mongoose()

const schema =mongoose.Schema
const connect = instance2.connect(process.env.CONNECTION_STRING)

const internSchema = mongoose.Schema(
    {
        intern_id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },
        password:{
            type:String,
            required:true,
        },
        phone: {
            type: String,
            required: [false, "Please add the contact phone number"],
        },
        DOB: {
            type: String,
            required: [false, "Please add the contact phone number"],
        },
        isAdmin: {
            type: Boolean,
            default : false
        }
        // cause_id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "causes",
        //     required:false,
        // },
        // joiningDate:{
        //     type : Date,
        //     required:false,
        // },
        // endDate:{
        //     type : Date,
        //     required:false,
        // },
        // perk_ids:{
        //     type:[mongoose.Schema.Types.ObjectId] ,
        //     ref: "perks",
        //     required:false,
        // },
        // fundRaised:{
        //     type:Number,
        //     default:0,
        // }
    },
    {
        timestamps: true,
    }
);
var Intern = instance2.model("Intern",internSchema)
module.exports = Intern