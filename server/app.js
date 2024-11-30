const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
const destination = require("./models.js")


app.get("/", async (req,res)=>{
    try{
        const result = await destination.find()
        res.send(result)
    }catch(error){
        console.log(error.message)
    }
})

mongoose.connect("mongodb://127.0.0.1:27017/ticketBooking")
.then(()=>console.log("server connected to database"))
.catch((error)=>console.log(error.message))


app.listen(3000, ()=>console.log(`server is running at port 3000`))