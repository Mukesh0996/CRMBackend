const express = require("express");
const leadsRouter = express.Router();
const leadsController = require("../controllers/leadsController");
const isAuth = require("../middlewares/isAuth");

leadsRouter.get("/leadstable", isAuth, leadsController.getLeadsFields)

.post("/addrecord", isAuth, leadsController.addLeadReacord)

.get('/getrecords', isAuth, leadsController.getLeadsRecords)

.get('/getfilterColumns', isAuth, leadsController.getleadsFilters)




module.exports = leadsRouter;