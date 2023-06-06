// const express = require("express");
// const router = express.Router();
// const getCharById = require("../controllers/getCharById");
// const {postFav, deleteFav} = require("../controllers/handleFavorites");
// const login = require("../controllers/login");

// //Get === Read, Post === Create, Put === Update, Delete === Delete

// router.get("/character/:id", getCharById);

// router.get("/", login);

// router.post("/fav", postFav);

// router.delete("/fav/:id", deleteFav);

// module.exports = router;
//envio un middleware como router
//le envio cada una de las rutas al server(index.js) junto con el controlador
//que va a ejecutar la accion




const router = require("express").Router();


const getCharById = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require("../controllers/login");

//Get === Read, Post === Create, Put === Update, Delete === Delete

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;