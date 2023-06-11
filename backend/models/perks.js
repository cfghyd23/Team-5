const mongoose = require('mongoose');

const perksSchema = new mongoose.Schema({
    id: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "perks"
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
  });

const PerkModel = mongoose.model('perks', postSchema);

module.exports = PerkModel;