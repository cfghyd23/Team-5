const mongoose = require("mongoose");

const internSchema = mongoose.Schema(
    {
        user_id: {
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Intern", internSchema);