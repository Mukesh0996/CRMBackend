const express = require("express");
const contactsController = require("../controllers/contactsController");
const isAuth = require("../middlewares/isAuth");
const contactsRouter = express.Router();

contactsRouter.get("/org/:orgId/contactsfields", isAuth, contactsController.getContactFields)

.get("/org/:orgId/getrecords", isAuth, contactsController.getContactsRecords)
.get("/org/:orgId/getfiltercolumns", isAuth, contactsController.getContactFilterColumns)

module.exports = contactsRouter;