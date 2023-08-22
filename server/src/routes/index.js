// const express = require("express");
// const router = express.Router();
const router = require("express").Router();


const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");

//Get === Read, Post === Create, Put === Update, Delete === Delete

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
//envio un middleware como router
//le envio cada una de las rutas al server(index.js) junto con el controlador
//que va a ejecutar la accion