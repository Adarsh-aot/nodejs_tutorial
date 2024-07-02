const express = require("express")
var session = require('express-session')
const path = require("path")

const app = express()
const users = {
    "user1":{
        username:'user1',
        password:123,
        name:"shuhaib"
    },
    "user2":{
        username:"user2",
        password:123,
        name:'adarsh'
    }
}

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'abcs')));

app.use(session({
    secret: 'keyboard cat',
    cookie: {}
  }))

app.get("/",(req,res)=>{
    console.log(req.session)
    if(req.session.user){
        res.render('home', {user:req.session.user})
    }else{
        res.redirect("/login")
    }
})

app.get("/login",(req,res)=>{
    
    if(req.session.user){
        res.redirect("/")
    }else{
        const error = req.session.error || ""
        delete req.session.error
        res.render("login",{error:error})

    }
})

app.post("/login",(req,res)=>{
    const data = req.body
    const userData = users[data.username]
    if(userData && userData.password == data.password){
        req.session.user = userData
        res.redirect('/')
    }else{
       req.session.error = "user not found"
       res.redirect("/login")
    }
})

app.get('/logout',(req,res)=>{
    req.session.user = null
    res.redirect("/login")
})


app.listen(3000,()=>{
    console.log("server started")
})