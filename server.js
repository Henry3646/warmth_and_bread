require("dotenv").config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if(!err) {
        console.log("Database conected...")
    } else {
        console.log(err)
    }})

const textSchema = new mongoose.Schema({
    name: String,
    content: String,
    subcontent: String
})

const Text = mongoose.model("Text", textSchema)



app.get("/text" , (req, res) => {
    Text.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})
app.use("/", require("./routes/contact"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(process.env.PORT || 3001, function() {
    console.log("Server is running...")
})