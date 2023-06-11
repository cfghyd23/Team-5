const mongoose = require('mongoose');

// Define the user schema
const causesSchema = new mongoose.Schema({
  cause_id: {
    type :Number,
    required : true,
  },
  name: {
    type: String,
    required: true
  },
  // fundsRaised : {
  //   type : Number,
  //   required : true
  // },
  thirdPartyLink: {
    type : String,
  },
  orientationLink: {
    type : String,
  },
  threshold : {
    type :  Number,
  }
});

const CauseModel = mongoose.model('causes', causesSchema);

module.exports = CauseModel;