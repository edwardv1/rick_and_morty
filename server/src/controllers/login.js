// const users = require("../utils/users");

// const login = (req, res) => {
//     const {email, password} = req.query;
//     const user = users.find((user) => {
//         user.email === email && user.password === password;
//     });
//     console.log(user);
//     if(user){
//         res.status(200).json({access: true});
//     } else {
//         res.status(200).json({access: false});  
//     }
// }

// module.exports = login;

const users = require("../utils/users.js"); //[ {-}]

module.exports = (req, res) => {
    const {email, password} = req.query;
    let access = false;

    users.forEach((user) => {
        //if(user.email === email && user.password === password) access = true;
        user.email === email && user.password === password 
        ? access = true 
        : null;
    })
    return  res.status(200).json({ access }); // envio  {access: true/false}
}