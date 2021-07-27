const ContactsTable = require("../Models/Contacts/contactsTable")


exports.getContactFields = async (req, res, next) => {
    try {
        let information = {}, mailing = {}, shipping = {};

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
        const mailingFields = await ContactsTable.findAll({
            where: {
                section:"mailing"
            }
        });
        mailingFields.sort((a,b)=>{
            return a.order > b.order ? 1 : -1
        });
        mailingFields.forEach(field => {
            mailing = {
                ...mailing,
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
        res.status(200).json({information, address: {shipping, mailing} })
    } catch (error) {
        
    }

}

exports.getContactsRecords = async () => {
    try {
        
    } catch (error) {
        
    }
}

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