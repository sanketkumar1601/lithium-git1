const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const Createusr1 = require("../controllers/usrcontroller")
const ordercontroller=require("../controllers/ordercontroller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)
  
router.post("/createusr",Createusr1.createusr)
router.post("/createproduct",Createusr1.createproduct)
router.post("/order",commonMW.mid1,ordercontroller.createorder)
//router.get("/orderdata",ordercontroller.getorderdata)
module.exports = router;