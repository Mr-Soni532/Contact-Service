const jwt = require("jsonwebtoken");

const authentication = async (req,res,next)=>{
    const token = req.headers['authorization'];
    if(token){
        const data =  jwt.verify(token, 'abainfotech_bhupender');
        req.userId = data;
        next()
    } else {
        res.send({err: 'Invalid Token'})
    }
}
module.exports = authentication;