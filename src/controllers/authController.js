const jwt = require("jsonwebtoken")
const employeeModel = require('../models/employeeModel')
const errorHandler = require("../middleware/errorHandler");
const login = async (req, res) => {
    let data = req.body
    let { email, password } = data

    let getEmployee = await employeeModel.findOne({ email: email, password: password })

    if (!getEmployee)  res.status(404).send({ msg: `employee not found` }) 

    let token = jwt.sign({ employId: getEmployee._id }, 'bonusproject4', { expiresIn: '4h' })
    res.setheader('x-auth-key', token)
    res.status(200).send({ Token: token })

}
module.exports={login}