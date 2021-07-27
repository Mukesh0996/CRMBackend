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
    {label:"State", type:"text",value:"", name:"state", section:"mailing", order: 3},
    {label:"Street", type:"text",value:"", name:"street", section:"mailing", order: 1},
    {label:"P.o.", type:"text",value:"", name:"po", section:"mailing", order: 4},
    {label:"City", type:"text",value:"", name:"city", section:"mailing", order: 2},
    {label:"Country", type:"text",value:"", name:"country", section:"mailing", order: 5},
    {label:"State", type:"text",value:"", name:"state", section:"shipping"},
    {label:"Street", type:"text",value:"", name:"street", section:"shipping", order: 1},
    {label:"P.o.", type:"text",value:"", name:"po", section:"shipping"},
    {label:"City", type:"text",value:"", name:"city", section:"shipping"},
    {label:"Country", type:"text",value:"", name:"country", section:"shippings"}
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