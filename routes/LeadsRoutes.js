const express = require("express");
const leadsRouter = express.Router();
const leadsController = require("../controllers/leadsController");
const isAuth = require("../middlewares/isAuth");

leadsRouter.get("/org/:orgId/leadstable", isAuth, leadsController.getLeadsFields)

.post("/org/:orgId/addrecord", isAuth, leadsController.addLeadReacord)

.get('/org/:orgId/getrecords', isAuth, leadsController.getLeadsRecords)

.get('/org/:orgId/getfilterColumns', isAuth, leadsController.getleadsFilters)

.get("/org/:orgId/lead/:leadId", isAuth, leadsController.getLeadRecord)



module.exports = leadsRouter;