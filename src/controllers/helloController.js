

exports.hello=(req,res)=>{
    
    res.status(200).json({status:"Success", data:"This is my 1st express Rest Api"});

}


exports.hello2=(req,res)=>{
    
    res.status(200).json({status:"Success", data:"This is my 1st express Rest Api Post Method"});

}
