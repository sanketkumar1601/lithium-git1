const productmodel = require("../models/productmodel")
const usrmodel = require("../models/usrmodel")
const ordermodel = require("../models/ordermodel")



const createorder = async function (req, res) {
    let header = req.headers["isfreeappuser"]
    let dataproduct = req.body
    let autherid = dataproduct.userId
    let productid = dataproduct.productId

    const product = await productmodel.findById(productid)
    const user = await usrmodel.findById(autherid)
    console.log(productid)
    console.log(autherid)

    if (product && user && header == "false") {
        if (product.price <= user.balance) {
            let totalbalance = user.balance - product.price
            req.body.amount=product.price
            let saved = await usrmodel.findOneAndUpdate({ _id: user._id }, { balance: totalbalance }, { new: true })
            console.log(saved)
            let order = await ordermodel.create(dataproduct)
            res.send({ saveddata: saved, msg: order })
            console.log("3")

        }
        else if (product.price > user.balance) {
            res.send({ saveddata: "you don't have enough balance" })
        }
    }
    else if (product && user && header == "true") {
        req.body.amount=0
        let order = await ordermodel.create(req.body)
        res.send({ msg: order, user })

    }
}

//     const getorderdata = async function (req, res) {

//         const data = await ordermodel.find().populate("productid").populate("userid")
//         res.send({ msg: data })
//     }
// }
module.exports.createorder = createorder