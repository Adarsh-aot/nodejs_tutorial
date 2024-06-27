// https://www.w3schools.com/nodejs/nodejs_filesystem.asp


const fs = require("fs")

const consoleFileDataSync = ()=>{
    const fileData = fs.readFileSync("./sample.json")
    console.log(fileData)
}

const consoleFileData = ()=>{
    fs.readFile("./sample.json",(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data)
    })
}
