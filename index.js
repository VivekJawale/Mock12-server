const express = require("express");
const connect=require("./src/config/db")
const app = express();
require('dotenv').config()
console.log(process.env)
const PORT = process.env.PORT || 8080;


app.get("", async (req, res) => {
    res.send({ msg: "Hello User" })
})
let URL=process.env.URL
// console.log(URL)
// app.listen(PORT,async()=>{
//    try {
//     await connect();
//     console.log("Connected to DB")
//    } catch (error) {
//     console.log(error)
//    }
// })