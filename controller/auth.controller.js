const User = require("../model/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
    try {
        let password = req.body.password;
        bcrypt.hash(password, 10, async (err,hash)=>{
            if(err) return res.status(500).send({msg: err.message});
            req.body.password = hash;
            console.log(req.body)
            await User.create(req.body)    
            res.send({msg: 'User Created Successfully.'})
        })
    } catch (error) {
        res.status(403).send({msg: 'User not created!'})
    }
}
exports.login = async (req, res) => {
    let user = await User.findOne({id: req.body.email});
    if(user == null) return  res.status(403).send({msg: 'User Created Successfully.'});
    bcrypt.compare(req.body.password, user.password, async (err,result)=>{
        if(err) return res.status(500).send({msg: err.message});
        if(result){
            let token = jwt.sign(user.id,'abainfotech_bhupender');
            res.send({token})
        } else {
            res.status(403).send({msg: 'Invalid Credentials'})
        }
    })
}
