const express = require('express')
const  mongoose  = require('mongoose')
const adminRouter  =express.Router()
const bodyParser = require('body-parser')
const CauseModel = require('../models/causes')

const Admin = require('../models/admin')

adminRouter.route("/cause/create")
.post((req,res)=>{
    const newRecord = new CauseModel({"cause_id" : req.body.cause_id,"name" : req.body.name,"fund_raised" : 0,"orientationLink" : req.body.orientationLink,"thirdPartyLink" : req.body.third_party_link,"threshold" : req.body.threshold});
    newRecord.save();
    res.send({status:200})
    console.log('New record created successfully.');
})

adminRouter.route("/cause/getAll")
.get((req,res) => {
    CauseModel.find({})
    .then((data)=>{
        res.json(data)
        console.log("the data being sent to client",data);
    })
})

adminRouter.route("/cause/delete")
.post((req,res) => {
    CauseModel.deleteOne({"cause_id" : req.body.cause_id})
    res.send({status:200});
})

adminRouter.route("/cause/update")
.post((req,res) => {
    CauseModel.updateOne(req.body)
    res.send({status:200});
})