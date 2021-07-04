const express = require("express");
const leadsRouter = express.Router();
const leadstable = require("../Models/leadTable");
const leadsController = require("../controllers/leadsController");

leadsRouter.get("/leadstable", leadsController.getLeadsFields)
.post("/addrecord",leadsController.addLeadReacord)




module.exports = leadsRouter;