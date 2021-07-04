const leadstable = require("../Models/leadTable");

const generateLeadId = () =>{
    const randomID =  Math.random() * 100000;

    return Math.floor(randomID);
}

exports.getLeadsFields = async (req, res, next) => {
    try {
        const leadInformation = await leadstable.findAll({where : {
            section :"information"
        }});
        let information = {}, address = {};
        leadInformation.forEach(obj => {
            information = {
                ...information,
                [obj.name] : {...obj.dataValues}
            }
        });
        const leadAddress = await leadstable.findAll({
            where: {
                section: "address"
            }
        });
        leadAddress.forEach(obj => {
            address = {
                ...address,
                [obj.name]: {...obj.dataValues }
            }
        });
        res.status(200).json({information, address});

    } catch (error) {
       error.statusCode = 500;
       error.message = "Something Went Wrong";
       next(error);
    }
}

exports.addLeadReacord = (req,res, next) => {
    try {
       const { last_name } = req.body;
        if(!last_name) {
            let error = new Error("Last Name should not be empty");
            error.statusCode = 404;
            error.value = "last_name";
            throw(error);
        }
        const id = generateLeadId();
       
       
    } catch (error) {
        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
        next(error);
    }
}