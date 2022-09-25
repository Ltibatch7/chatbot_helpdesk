const express = require('express')
const router  = require('./route/router')
const app = express()
require('./db/connection')

app.use(express.json())
app.use('/',router)

app.listen(4000,()=>{
    console.log('Server running on port 4000');
})