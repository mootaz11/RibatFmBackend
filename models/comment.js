const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    contenu:{type:String,required:true},
    date_creation:{type:Date,required:true},
    actualite:{type:mongoose.Schema.Types.ObjectId,ref:"actualite"}
});


module.exports=mongoose.model('comment',commentModel);
