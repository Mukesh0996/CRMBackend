const ContactsTable = require("../Models/Contacts/contactsTable")

// fetch contact Add form meta data
exports.getContactFields = async (req, res, next) => {
    try {
       
        let information = {}, billing = {}, shipping = {};

        const informationFields = await ContactsTable.findAll({
           where: {
               section:"information"
           }
        });

        informationFields.sort((a,b)=> {
            return  a.order > b.order ? 1 : -1;
        });
        informationFields.forEach(field => {
            information = {
                ...information,
                [field.name]: {...field.dataValues}
            }
        })
        const billingFilds = await ContactsTable.findAll({
            where: {
                section:"billing"
            }
        });
        billingFilds.sort((a,b)=>{
            return a.order > b.order ? 1 : -1
        });
        billingFilds.forEach(field => {
            billing = {
                ...billing,
                [field.name] : { ...field.dataValues }
            }
        })

        const shippingFields = await ContactsTable.findAll({
            where: {
                section:"shipping"
            }
        });
       
        shippingFields.sort((a,b)=>{
            return a.order > b.order ? 1 : -1 
        });
        shippingFields.forEach(field => {
            shipping = {
                ...shipping,
                [field.name] : { ...field.dataValues }
            }
        })

        res.status(200).json({information, address: {shipping, billing} })
    } catch (error) {
        
    }

}
// fetch contact records & record headers(limit 7)
exports.getContactsRecords = async (req, res, next) => {
    try {
        const contactInformationFields = await ContactsTable.findAll({
            where: {
                section:"information"
            }
        })
        let information= {};

        res.status(200).json({contactsCols:contactInformationFields, contacts:[] });
    } catch (error) {
        
    }
}

exports.getContactFilterColumns = async (req,res, next) => {
    try {
        const fields = await ContactsTable.findAll({
            attributes: ["label"]
        });
        res.status(200).json({data: {contactFilerColumns: fields}})

    } catch(error) {

    }
}

// add a record to the contacts table
exports.addContactRecord = async () => {
    try {
        
    } catch (error) {
        
    }
}

exports.getContactRecord = async () => {
    try {
        
    } catch (error) {
        
    }

}

exports.editContactRecord = async () => {
    try {
        
    } catch (error) {
        
    }

}




exports.getContactLabels = async () => {
    try {

        
    } catch (error) {
        
    }
}