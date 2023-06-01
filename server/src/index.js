const http = require("http");
const getCharById = require("./controllers/getCharById.js");
const PORT = 3001;

http.createServer((req, res) => {
    //Core...Setea el header, y le permite acceso total a cualquier url
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop();
        getCharById(res, id)
    }
    
    
}).listen(PORT, "localhost");





/* const characters = require("./utils/data"); //[ {id:1}, {}]

if(req.url.includes("/rickandmorty/character")){
    //const id = req.url.split("/").pop().at(-1);  empieza al final
    const id = req.url.split("/").pop();
    const character = characters.filter (char => char.id === Number(id));  //tambien pude usar .pop, .shift
    //character: [ {id:1}]
    //char.id tipo: number,  id tipo:string
    res
    .writeHead(200, {"content-type": "application-json"})
    .end(JSON.stringify(character[0]));
    //character es un array de objetos, le paso el [0] para que llegue como objeto al front
    //asi no paso todo el personaje con un arreglo sino solo ese personaje como obj
    //req.url= localhos:3001/rickandmorty/character/4
    //   split [localhos:3001, rickandmorty, character, 4]
} */