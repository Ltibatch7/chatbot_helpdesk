const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017',{
    dbName:"chatbot",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected')
}).catch((err)=>{
    console.log('Failed '+ err)
})