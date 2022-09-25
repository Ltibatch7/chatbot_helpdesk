const express = require('express')
const userRegister = require('../controller/controller')
const router = express()

router.post('/register',userRegister)

module.exports = router;