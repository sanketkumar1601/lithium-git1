const blogmodel = require('../model/blogmodel')



const deleteByQuery= async function(req,res){
     
        let data=req.query.authorID
      let del= await blogmodel.updateMany({authorID:data},{$set:{isDeleted:true}},{new:true})
   console.log(del)
    
       if(!del)
           return res.status(404).send({msg:"blog not found"})
        res.status(200).send({msg:del})
       }
   module.exports.deleteByQuery = deleteByQuery