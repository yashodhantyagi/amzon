const express = require("express");
const productscontrollers= require('../controllers/productscontrollers.js')
const productsRouter = express.Router();
productsRouter.route('/')
.get(productscontrollers.getAllProducts)
.post(productscontrollers.addProduct);

productsRouter.route('/:id')
.put(productscontrollers.replaceProduct);
module.exports = productsRouter;