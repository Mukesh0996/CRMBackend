const bcrypt = require('bcryptjs');
const Org = require('../Models/signup');
const User = require('../Models/user');
const jwt = require("jsonwebtoken");

//helper functions
const generateOrgID = () => {
    const randomID =  Math.random() * 100000;

    return Math.floor(randomID);
}

const generateUserID = () => {
    const randomID = Math.random() * 90000;

    return Math.floor(randomID);
}

//create and org and user API
exports.postSignUp = async (req,res, next) => {
    try {
        const {org_name, email, password, first_name, last_name, contact} = req.body;

        const checkExistingUser = await User.findOne({ where: { email: email }});

        if(checkExistingUser) {
            let error = new Error("A user with this email is already present");
            error.statusCode = 404;
            throw(error);
        }
        const ID = generateOrgID();
        const response = await Org.create({org_name: org_name, org_id: ID});
        if(!response) {
            let error =  new Error("Unable to sign up. Please try after sometime");
            error.statusCode = 422;
            throw(error);
        }
        const user_id = generateUserID();
        const hashedPassword = await bcrypt.hash(password, 12);
        const createUser = await User.create({ user_id: user_id, first_name, last_name, password: hashedPassword, contact, email, OrgOrgId: response.org_id });
        if(!createUser) {
            let error = new Error("Unable to create a user.")
            error.statusCode = 406;
            throw(error);
        }
        res.status(200).json({ message:"Sign In Successfull" });

    } catch (error) {
        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
         next(error);
    }  
}

exports.postLogin = async (req, res, next) => {
 
  try {
      const { email, password } = req.body;
      const user = await User.findOne({where: { email: email}});
      if(!user) {
          let error = new Error("User with this email address is not found.");
          error.value = "email"
          error.IsValid = false;
          error.statusCode = 400;
          throw(error);
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if(!isEqual) {
         let error = new Error("Wrong password. Try again or click ‘Forgot password’ to reset it.");
          error.value = "password"
          error.IsValid = false;
          error.statusCode = 400;
          throw(error);
    }
     const token = jwt.sign({
        orgId: user.OrgOrgId, 
        userId: user.user_id
     }, 'somesupersupersupersupersecret', {expiresIn: "1day"});
    res.status(200).json({orgId: user.OrgOrgId, userId: user.user_id, token: token})
  } catch (error) {
    if(!error.statusCode) {
        error.statusCode = 500;
        error.message = "Something Went Wrong"
    }
     next(error);
      
  }

}