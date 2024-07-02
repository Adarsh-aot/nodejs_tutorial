// package.json
// https://expressjs.com/en/starter/installing.html
const express = require("express")
const app = express()
const userRoute = require("./routes/user")
const todoRoute = require("./routes/todo")

//config express
app.use(express.json())
 

//routes

app.use('/todo',todoRoute)
// app.use('/todo',userRoute)


 


//application start
app.listen(3000,()=>{
    console.log("njn ready ayi")
})