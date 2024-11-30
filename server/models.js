const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema({
    location:{
        type: String,
        Required: true
    },
    price:{
        type: Number,
        Required: true
    }
})

const destination = mongoose.model("destination", destinationSchema)

module.exports = destination