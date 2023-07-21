const mongoose = require('mongoose')

const dbConnect = async ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/practice",{
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>{console.log('connection Successful')}).catch(err=>console.log(err))
}
dbConnect()
module.exports = dbConnect;