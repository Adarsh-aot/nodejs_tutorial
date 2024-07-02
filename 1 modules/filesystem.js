// https://www.w3schools.com/nodejs/nodejs_filesystem.asp


const fs = require("fs")

const consoleFileDataSync = ()=>{
    console.log("start")
    const fileData = fs.readFileSync("./sample.json")
    console.log(fileData)
    console.log("end")
}

const consoleFileData = ()=>{
    console.log("start")
    fs.readFile("./sample.json",(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data)
    })
    console.log("end")
}

// consoleFileDataSync()
consoleFileData()