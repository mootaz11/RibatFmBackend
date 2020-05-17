const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{
    try{
       if(req.headers.authorization){

       
        const token = req.headers.authorization.split(" ")[1];
        
            const decoded=jwt.verify(token,"Secret");
            req.userData=decoded;  
            if(req.userData.role)
            {
                next();
            }
            else {
                return res.status(401).json({message:'authentication failed'});
                 }
            
            }

            else {
                next();
            }
       
    }

    catch(error){
        return res.status(401).json({message:'authentication failed'});
    }
}