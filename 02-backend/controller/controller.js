const model = require("../db/model");
const bcrypt = require('bcryptjs')

const userRegister = async(req,res) => {
    const hash = await bcrypt.hash(req.body.password,10);
    if(!emailID){
        const user = new model({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        username:req.body.username,
        password:hash,
        email:req.body.email,
        phonenumber:req.body.phonenumber
    }).save()
    .then(()=>{
        res.status(200).json('success')
    })
    .catch((err)=>{
        res.json(err)
    })
    }
    
}

module.exports = userRegister;