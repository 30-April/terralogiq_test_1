const express = require('express')
const { generateToken, refreshToken} = require("../jwt")

const router = express.Router()

const dataUser = [
    {
        username: "admin",
        password: "password",
        role: "admin"
    }, 
    {
        username: "guest",
        password: "password",
        role: 'guest'
    }
]

router.get("/", (req,res) => {
    res.send(dataUser)
})

router.post("/login/:username/:password", (req,res) => {
    const user = req.params
    const data = []
    let token = generateToken({ username: user.username })


    dataUser.map((val) => {
        val.username === user.username && val.password === user.password ? 
        data.push(val, token) : null
    })

    res.send({
        result: data
    })
})

module.exports = router