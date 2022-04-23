const express = require('express')
const cors = require('cors')
const auth = require('./middlewares/auth')
const LoginRoutes = require('./routes/UserRoutes')

const { registerRoutes } = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())

registerRoutes(app)

module.exports = app