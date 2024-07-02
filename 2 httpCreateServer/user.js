const handleGet = (req, res)=>{
    
        res.end("hi how are you")
   
}

const handlePost = (req, res)=>{
 
        res.end("no auth")
    
}

module.exports = {
    handleGet,
    handlePost
}