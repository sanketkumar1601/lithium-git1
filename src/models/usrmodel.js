const mongoose = require('mongoose');

const usrschema = new mongoose.Schema({
    name:String,

    balance:{
        type:Number,
        default:100},

        address:String,
        age:Number,
        
        gendre:{
            type:String,
            enum:["male","female","other"],

            isFreeAppUser:{
                type:Boolean,
                default:false
            }
        }
})


module.exports= mongoose.model("usr",usrschema)