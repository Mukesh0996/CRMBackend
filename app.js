const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./utils/db')
const app = express();


const homeRouter = require("./routes/HomeRouter");
const authRouter = require("./routes/authRoutes");
const leadsRouter = require("./routes/LeadsRoutes");
const contactsRouter = require("./routes/ContactsRoutes");


const Org = require('./Models/signup');
const User = require('./Models/user');
const Leads = require("./Models/Leads/leads");
const leadsSeeder = require("./Seeder/leadsSeeder");
const ContactsTable = require("./Models/Contacts/contactsTable");
const Notes = require("./Models/Notes/notes");
const conSeeder = require("./Seeder/contactsSeeeder");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use("/", authRouter);
app.use("/home", homeRouter);
app.use("/leads",leadsRouter);
app.use("/contacts", contactsRouter);



//middle ware that throws error
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message || "something went wrong";
    const isValid = error.IsValid|| false;
    const value = error.value|| "";
    res.status(status).json({ message: message, status: status, isValid: isValid, value: value });
});

Org.hasMany(User);
User.belongsTo(Org);
User.hasMany(Leads);
Leads.belongsTo(User);



sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log("connected");
    });
});
