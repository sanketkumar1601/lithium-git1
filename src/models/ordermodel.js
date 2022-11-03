const mongoose= require("mongoose")
const Objectid= mongoose.Schema.Types.ObjectId
const orderschema = new mongoose.Schema({
    amount:Number,
    isFreeAppUser:Boolean,

    productId:{
        type:Objectid,
        ref:"productid",
        required:true
    },
    userId:{
        type:Object,
        ref:"userid",
        required:true
    },

})

// module.exports=orderschema
module.exports = mongoose.model('order', orderschema)