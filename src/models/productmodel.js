const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name:String,
    category:String,
    price:{
        type:Number,
        require:true
    }
})
module.exports= mongoose.model("product",productschema)