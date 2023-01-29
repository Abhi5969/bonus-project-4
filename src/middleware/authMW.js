const jwt = require("jsonwebtoken")
const employeeModel = require('../models/employeeModel')

const authentication = async (req,res) =>{
    let token = req.headers["x-auth-key"];
    if(!token) res.status(400).send({msg:`token is not present`})

    jwt.verify(token, "bonusproject4", (err,decode) => {
        if (err) {return res.status(401).send({status: false, err: err.message })
      }else{
          req.decode = decode;
          return next(); 
      };
      });
}

const authorization = async (req,res)=>{
    
}