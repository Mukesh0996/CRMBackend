const ContactsTable = require("../Models/Contacts/contactsTable");

const values = [{
    label: "First Name", value: "", type: "text", name: "first_name", section: "information", order: 1
}, { 
        label: "Last Name", type: "text", value: "", name: "last_name", section: "information", order: 2 
}, { 
        label: "Email", type: "email", value: "", name: "email", section: "information", order: 3 
}, {
        label: "Company", type:"text", value:"", name:"company", section: "information", order: 4
    },
    {
        label: "Phone", type:"text", value:"", name:"phone", section: "information", order: 5
    },
    {
        label: "Department", type:"text", value:"", name:"department", section: "information", order: 6
    },
    {
        label: "Mobile", type:"text", value:"", name:"mobile", section: "information", order: 7
    },
    {
        label: "Date of Birth", type:"date", value:"", name:"date", section: "information", order: 8
    },
    {
        label: "Skype ID", type:"text", value:"", name:"skype_id", section: "information", order: 9 
    },
    {label:"State", type:"text",value:"", name:"billing_state", section:"billing", order: 3},
    {label:"Street", type:"text",value:"", name:"billing_street", section:"billing", order: 1},
    {label:"P.o.", type:"text",value:"", name:"billing_po", section:"billing", order: 4},
    {label:"City", type:"text",value:"", name:"billing_city", section:"billing", order: 2},
    {label:"Country", type:"text",value:"", name:"billing_country", section:"billing", order: 5},

    {label:"State", type:"text",value:"", name:"shipping_state", section:"shipping", order: 3},
    {label:"Street", type:"text",value:"", name:"shipping_street", section:"shipping", order: 1},
    {label:"P.o.", type:"text",value:"", name:"shipping_po", section:"shipping", order: 4},
    {label:"City", type:"text",value:"", name:"shipping_city", section:"shipping", order: 2},
    {label:"Country", type:"text",value:"", name:"shipping_country", section:"shipping", order: 5}
]

const conSeeder = async() => {
   
    try {

        values.forEach( async rec => {
            console.log(rec);
            console.log("inseerting");
            await ContactsTable.create(rec);
        })
        
    } catch (error) {
        console.log("--------------------")
        console.log("error ius",error)
        console.log("--------------------")

    }
}

module.exports = conSeeder;