const data = [{label:"First Name", value:"", type:"text", name:"first_name" , section:"information", order:1, inBusinessCardView: true, businessCardOrder: 1},
{label:"Last Name", type:"text",value:"", name:"last_name", section:"information", order:2, inBusinessCardView: true, businessCardOrder: 2 },
{label:"Company", type:"text",value:"", name:"company", section:"information", order: 3, inBusinessCardView: true, businessCardOrder: 3},
{label:"Email", type:"email", value:"",name:"email", section:"information", order:4, inBusinessCardView : true, businessCardOrder: 4},
{label:"Secondary Email", type:"email", value:"",name:"secondary_email" , section:"information", order:5},
{label:"Website", type:"text",value:"", name:"website" , section:"information", order:6},
{label:"Language", type:"text",value:"", name:"language" , section:"information", order:7},
{label:"Phone", type:"text", value:"", name:"phone" , section:"information", order: 8, inBusinessCardView: true, businessCardOrder: 5},
{label:"Mobile", type:"text",value:"",  name:"mobile" , section:"information", order: 9},
{label:"Fax", type:"text",value:"",  name:"fax" , section:"information", order: 10},
{label:"Lead Source", type:"text",value:"",  name:"lead_scource", section:"information", order:11},
{label:"Lead Industry", type:"text",value:"",  name:"lead_industry", section:"information" , order: 12},
{label:"Skype ID", type:"text",value:"", name:"skype_id", section:"information", order: 13},
{label:"State", type:"text",value:"", name:"state", section:"address", order:4},
{label:"Street", type:"text",value:"", name:"street", section:"address", order: 1},
{label:"P.o.", type:"text",value:"", name:"po", section:"address", order: 5},
{label:"Zip Code", type:"text",value:"", name:"zip_code", section:"address", order: 2},
{label:"City", type:"text",value:"", name:"city", section:"address", order: 3},
{label:"Country", type:"text",value:"", name:"country", section:"address", order:6}
];

const LeadsTable = require("../Models/Leads/leadTable");


const leadsSeeder = async() => {
    console.log("exec");
    try {

        data.forEach( async rec => {
            console.log(rec);
            console.log("inseerting");
            await LeadsTable.create(rec);
        })
        
    } catch (error) {
        console.log("--------------------")
        console.log("error ius",error)
        console.log("--------------------")

    }
}
module.exports = leadsSeeder;