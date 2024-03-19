const express = require("express");
const {getAllBooks,Addbook} = require("../controller/controller")

const Routes  =express.Router();

Routes.get("/",getAllBooks);
Routes.post("/addbook",Addbook);


module.exports = {Routes}
