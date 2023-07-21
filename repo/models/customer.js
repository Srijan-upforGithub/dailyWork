const mongoose = require('mongoose')

const ConsumerSchema = new mongoose.Schema({
    name:String,
    model:String,
    price:Number,
    category:String
})

module.exports = mongoose.model('customer',ConsumerSchema)