// https://nodejs.org/api/http.html
/* --------------------------- import http module --------------------------- */
const http = require("http")
 
const { handlePost, handleGet } = require("./user")
const server = http.createServer((req,res)=>{
    if(req.url == "/user"){
        if(req.method == "POST"){
            handlePost(req,res)
        }
        if(req.method === "GET"){
            handleGet(req,res)
        }
       
    }else{
        res.end("ninak anuvadham illa")
    }
})
const port = 3000

server.listen(port,"192.168.1.155",()=>{
    console.log("server is running .....")
})


// if(req.url == "/"){

// }

// if(req.url == "/user"){

// }

// if (req.url == "/data"){

// }


// res.write("<h1>sijo</h1>")
// res.write("<div>asdfasd</div>")
// res.write('"sdafsdafasdf"')
// res.write("sdafsdafasdf")
// res.end("hello world")