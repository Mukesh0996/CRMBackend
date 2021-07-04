const data = [{label:"First Name", value:"", type:"text", name:"first_name" , section:"information"},
{label:"Last Name", type:"text",value:"", name:"last_name", section:"information" },
{label:"Company", type:"text",value:"", name:"company", section:"information"},
{label:"Email", type:"email", value:"",name:"email", section:"information"},
{label:"Secondary Email", type:"email", value:"",name:"s_email" , section:"information"},
{label:"Website", type:"text",value:"", name:"website" , section:"information"},
{label:"Language", type:"text",value:"", name:"language" , section:"information"},
{label:"Phone", type:"text", value:"", name:"phone" , section:"information"},
{label:"Mobile", type:"text",value:"",  name:"mobile" , section:"information"},
{label:"Fax", type:"text",value:"",  name:"fax" , section:"information"},
{label:"Lead Source", type:"text",value:"",  name:"lead_scource", section:"information"},
{label:"Lead Industry", type:"text",value:"",  name:"lead_industry", section:"information"},
{label:"Skype ID", type:"text",value:"", name:"skype_id", section:"information"},
{label:"State", type:"text",value:"", name:"state", section:"address"},
{label:"Street", type:"text",value:"", name:"street", section:"address"},
{label:"P.o.", type:"text",value:"", name:"po", section:"address"},
{label:"Zip Code", type:"text",value:"", name:"zip_code", section:"address"},
{label:"City", type:"text",value:"", name:"city", section:"address"},
{label:"Country", type:"text",value:"", name:"country", section:"address"}
];

const LeadsTable = require("../Models/leadTable");


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