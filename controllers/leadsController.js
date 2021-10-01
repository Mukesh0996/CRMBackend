const Leads = require("../Models/Leads/leads");
const LeadsTable = require("../Models/Leads/leadTable");
const { Op } = require("sequelize");
const User = require('../Models/user');

const generateLeadId = () => {
    const randomID =  Math.random() * 100000;

    return Math.floor(randomID);
}

exports.getLeadsFields = async (req, res, next) => {
    try {
        const leadInformation = await LeadsTable.findAll({where : {
            section :"information"
        }});
        let information = {}, address = {};
        leadInformation.forEach(obj => {
            information = {
                ...information,
                [obj.name] : {...obj.dataValues}
            }
        });
        const leadAddress = await LeadsTable.findAll({
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

exports.addLeadReacord = async (req,res, next) => {
    try {
       const { last_name } = req.body;
        if(!last_name) {
            let error = new Error("Last Name should not be empty");
            error.statusCode = 404;
            error.value = "last_name";
            throw(error);
        }
       const id = generateLeadId();
       const leadRecord = await Leads.create({
           ...req.body,
           userUserId: req.userId
       });
       if(!leadRecord) {
           let error = new Error("Unable to create Lead");
           error.statusCode = 401;
           throw(error);
       }
       res.status(200).json({data: leadRecord.id})
    } catch (error) {

        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
        next(error);
    }
}

exports.getLeadsRecords = async(req, res, next) => {
    try {
            const leads = await Leads.findAll({
                where: {
                    userUserId: req.userId
                },
                attributes: ["id","first_name","last_name","company","email","secondary_email","website"]
            });

            const leadCols = await LeadsTable.findAll({
                where: {
                    section:"information",
                    order:{
                        [Op.lt]: 7
                    }
                }
            })

            leadCols.sort((a,b)=> {
                return  a.order > b.order ? 1 : -1;
            });
            res.status(200).json({data: {leads, leadCols}})
        
    } catch (error) {
        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
        next(error);
    }
}

exports.getleadsFilters = async (req, res, next) => {
    try {
        const fields = await LeadsTable.findAll({
            attributes: ["label"]
        });
       
        res.status(200).json({data: fields})
        
    } catch (error) {
        console.log(error);
        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
        next(error);
    }
}

exports.getLeadRecord = async (req, res, next) => {
    try {
           
            const {leadId} = req.params;
            let leadRecord = await Leads.findOne({
                where: {
                    id: leadId
                }
            });
            let record ={};
            for(let key in leadRecord.dataValues) {
                const updatedKey = key.split("_").map(singlekey => singlekey.charAt(0).toUpperCase() + singlekey.slice(1));
                const finalKey = updatedKey.join(" ");
               record = {
                   ...record,
                [finalKey]: leadRecord.dataValues[key]
               }
            }
          
            res.status(200).json({record});
    } catch (error) {
        
    }
}