const { Sequelize } = require("sequelize");

const CRMDB = new Sequelize("postgres://bkcwdqax:CeQBDZrLYBHHHH630M-kLDFWwiBuJkr6@raja.db.elephantsql.com/bkcwdqax");

(async () => {
  try {
    await CRMDB.authenticate();
    console.log("Connection Successfull");
  } catch (error) {
    console.log("-----------Error while connection------------");
    console.error(error);
    console.log("---------------------------------------");
  }
})();

module.exports = CRMDB;