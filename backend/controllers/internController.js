const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");//for password hashing

const User = require("../models/internModel");//for userAvailable...to check from db
const bodyparser = require('body-parser')
const CauseModel = require('../models/causes')
const InternModel = require('../models/internModel');
const  mongoose  = require("mongoose");
const { v4: uuidv4 } = require('uuid');
//@desc Register a user
//@route POST /api/users/register
//@access public
const data = require('../server')



const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { username,
        email,
        dob,
        mobile,
        address,
        password,
        confirmPassword } = req.body;
        const userId = uuidv4();
        console.log(userId);
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    //findOne to find user
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    res.status(201).json({ msg:"Register the user", _id: userId, email: email });
    InternModel.create({intern_id:userId,name:username , email:email , password:hashedPassword ,phone:mobile,DOB:dob})
 });

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });//to find user
    //2nd param to compare password with hashedpassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const intern = InternModel.find({email:email})
        res.status(200).send({ interns:data ,name:intern.name ,email:email  , message: "success" });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});



module.exports = { registerUser, loginUser, currentUser };