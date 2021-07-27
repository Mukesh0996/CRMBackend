const express = require("express");
const contactsController = require("../controllers/contactsController");
const isAuth = require("../middlewares/isAuth");
const contactsRouter = express.Router();

contactsRouter.get("/contactsfields", isAuth, contactsController.getContactFields)

module.exports = contactsRouter;