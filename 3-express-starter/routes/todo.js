const express = require("express")
const route = express.Router()
const helper = require("../helper")

route.get("/",(rq,res,next)=>{
    console.log("hi")
    next()
}, helper.getAllData)
route.get("/:id",helper.getDataById)

const validateFunction = (req,res, next)=>{
    if(req.body.id){
        res.json({message:"enikk id venda"})
    }else{
        next()
    }
}
route.post("/",validateFunction,helper.createData)
route.put("/:id", helper.updateData)
route.delete("/:id",helper.deleteData)

module.exports = route