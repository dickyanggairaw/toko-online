const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const cors = require('cors')
const router = require('./routers')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log('Server Listening at ' + PORT)
})