const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerSchema= new Schema({
    name:{type:String, required:true },
    email:{type:String, required:true},
    phone: {type:Number, required:true},
    password:{type:String, required:true}
});

const Registration = mongoose.model("Registration",registerSchema);

module.exports= Registration;