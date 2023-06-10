const mongoose = require("mongoose");

const internSchema = mongoose.Schema(
    {
        intern_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "intern",
        },
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },
        phone: {
            type: String,
            required: [true, "Please add the contact phone number"],
        },
        DOB: {
            type: String,
            required: [true, "Please add the contact phone number"],
        },
        cause_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "causes",
        },
        joiningDate:{
            type : Date,
            required:true,
        },
        endDate:{
            type : Date,
            required:true,
        },
        perk_ids:{
            type:[mongoose.Schema.Types.ObjectId] ,
            ref: "perks",
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Intern", internSchema);