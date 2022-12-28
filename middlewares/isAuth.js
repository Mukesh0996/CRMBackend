const jwt = require("jsonwebtoken");
const User = require("../Models/user");

module.exports = async (req, res, next) => {
    
    try {
    let decodedToken;
    const authHeader = req.get("Authorization");

    if(!authHeader) {
        const error = new Error("Not Authenticated");
        error.statusCode = 401;
        throw error;
    }
   
    const token = authHeader.split(" ")[1];

    decodedToken = jwt.verify(token, "somesupersupersupersupersecret");

    if(!decodedToken) {
        const error = new Error('not authenticated');
        error.statusCode = 401;
        throw error
    }
    
    const authUser = await  User.findOne({where: {user_id: Number(decodedToken.userId)}});
     
    if(!authUser) {
        const errorObj = new Error("Unauthorised User");
        errorObj.statusCode = 401;
        throw errorObj
    }
    req.userId = decodedToken.userId;
    req.orgId = decodedToken.orgId;

    next();

    } catch (error) {
        next(error);
    }
}