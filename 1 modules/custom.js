const findSum= (...data)=>{
    return data.reduce((acc,i)=>acc+i,0)
}

module.exports = {findSum}