const express = require('express');
const router = express.Router();

const cowincontroler= require("../controllers/cowincontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/getdistic/:stateId",cowincontroler.getdistic)

module.exports = router;