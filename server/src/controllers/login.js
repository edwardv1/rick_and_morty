const users = require("../utils/users.js"); //[ {-} ]

module.exports = (req, res) => {
    const {email, password} = req.query;
    let access = false;

    users.forEach((user) => {
        //if(user.email === email && user.password === password) access = true;
        user.email === email && user.password === password 
        ? access = true 
        : alert("");  //se ejecuta el alert del front, en la funcion login
    })
    return res.status(200).json({ access }); // envio  {access: true/false}
}