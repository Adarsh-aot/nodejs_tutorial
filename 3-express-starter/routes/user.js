const express = require("express")
const route = express.Router()

route.get("/abcd",(req,res)=>{
    res.json([])
})

module.exports = route