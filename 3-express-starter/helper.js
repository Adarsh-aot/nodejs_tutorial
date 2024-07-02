const dummy = [
    {id:1, name:'shuhaib', age:1},
    {id:2, name:'afasdf'},
    {id:3, name:'shuhasadfib'},
    {id:4, name:'sadf'}
]

const getAllData = (req,res)=>{
    console.log(req.query)
    const name = req.query.name
    if(name){
       const userdata = dummy.filter(i=> i.name.startsWith(name))
       res.json(userdata)
    }else{
        res.json(dummy)
    }
    
}



const getDataById = (req,res)=>{
    const userId = req.params.id
    const userData = dummy.find(i=> i.id == userId)
    if(userData){
        res.json(userData)
    }else{
        res.json({"message":"data not found"})
    }

}

const createData = (req,res,next)=>{
    const data = req.body;
    const id = data.id
    const userExist = dummy.find(i=> i.id ==id)
    if (userExist) {
        res.status(400).json({message:"user exist"})
    }else{
        dummy.push(data)
        res.json(dummy)
    }
  
    
}

const updateData =  (req,res)=>{
    const id = req.params.id
    const data = req.body
    const index =dummy.findIndex(i=> i.id ==id)
    if(index !== -1 ){
        dummy[index] = data
        return res.json(dummy[index])
        
    } 
    res.json({message:"user not found"})


}

const deleteData = (req,res)=>{
    const id = req.params.id
    console.log(id)
    const indexOfUser = findIndex.filter(i=>i.id != id)
    dummy.splice(indexOfUser,1)
    res.json(dummy)
}


 

module.exports = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData
}