const express = require('express');

const router = express.Router();

// solution 1

let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]
router.post('/players', function (req, res) {
    let abc = req.body.element

    for (i of players) {
        if (i.name == abc.name) {
            return res.send({ msg: "name already exit of this player" })

        }
    }
    players.push(players)
    console.log(players)
    re.send({ msg: players, status: true })




    // res.send(  { data: players , status: true }  )
})

module.exports = router;

