const express = require('express');
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan");
//const cors = require("cors"); no hace falta ya que tenemos una config de seguridad
//server.use(cors());


//Middlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json()); //me permite poder leer todo lo que llegue por body,
 //transforma todo lo que me llega en formato de 0s y 1s desde el navegador a un objeto que JS entiende.
 server.use(morgan("dev"));
 server.use("/rickandmorty", router); //toda request que venga de esta ruta, termina de enrotearlo a router, construyo la url en partes. aqui empiezo la ruta y la completo desde router (donde estan las posibles rutas)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
