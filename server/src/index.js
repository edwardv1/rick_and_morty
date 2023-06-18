const server = require("./app.js");
const PORT = 3001;
//importo instancia de sequelize con conn
const { conn } = require("./DB_connection");

//cambiar el valor de force a false cuando tenga el server listo
conn.sync({ force: true }) //devuelve una promesa
   .then(()=> {
      server.listen(PORT, async () => {
         console.log('Server raised in port: ' + PORT);
      })
   })
   .catch(error => console.log(error.message))



//await conn.sync({ force: true});
