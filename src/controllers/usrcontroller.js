const usrmodel = require("../models/usrmodel")
const productmodel = require("../models/productmodel")

const createusr = async function (req,res){
    const data = req.body
    const usrdata = await usrmodel.create(data)
   res.send({msg:usrdata})
}

const createproduct = async function (req,res){
    const data = req.body
    const productdata = await productmodel.create(data)
    res.send({msg:productdata})
}




module.exports.createusr=createusr
module.exports.createproduct=createproduct
