

const ruu=function(req,res,next){
    let date=new Date()
    let ipaddress=req.ip
    let url=req.url
    next()
    console.log( date,ipaddress,url)

 
}
module.exports=ruu