const mongoose = require('mongoose');

// Define the user schema
const causesSchema = new mongoose.Schema({
  cause_id: {
    type :  mongoose.Schema.Types.ObjectId,
    required : true,
    ref : "causes"
  },
  name: {
    type: String,
    required: true
  },
  fundsRaised : {
    type : Integer,
    required : true
  },
  description: {
    type: String,
    required: true
  },
  thirdPartyLink: {
    type : String,
    required : true
  },
  orientationLink: {
    type : String,
    required : true
  },
  activeOrientation : {
    type : Boolean,
    default : false
  }
});

const CauseModel = mongoose.model('causes', postSchema);

module.exports = CauseModel;