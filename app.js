const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./utils/db')
const app = express();

const authRouter = require("./routes/authRoutes");
const leadsRouter = require("./routes/LeadsRoutes");

const Org = require('./Models/signup');
const User = require('./Models/user');
const LeadsTable = require("./Models/leadTable");
const Leads = require("./Models/leads");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/", authRouter);
app.use("/org/:orgId/leads",leadsRouter);

//middle ware that throws error
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || "something went wrong";
    const isValid = error.IsValid|| false;
    const value = error.value|| "";
    res.status(status).json({ message: message, status: status, isValid: isValid, value: value });
})

Org.hasMany(User);
User.belongsTo(Org);
User.hasMany(Leads);
Leads.belongsTo(User);


sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log("connected")
    })
})

