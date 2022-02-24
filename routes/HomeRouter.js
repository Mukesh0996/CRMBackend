const express = require("express");
const homeRouter = express.Router();
const isAuth = require("../middlewares/isAuth");
const homeContoller = require("../controllers/homeController");


homeRouter.get("/org/:orgId/getLeads", isAuth, homeContoller.getCurrentYearLeadsForChart);


module.exports = homeRouter;