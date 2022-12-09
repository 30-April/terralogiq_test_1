const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const routes = require("./router/users")

const app = express()
const port = 2000

app.use(bp.json())
app.use(cors())

app.use('/users', routes)

app.listen(port, () => {
    console.log(`listen to port ${port}`)
})