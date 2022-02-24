const Leads = require("../Models/Leads/leads");


exports.getCurrentYearLeadsForChart = async (req, res, next) => {

    try {
        let CurrentYearsLeads = [];
        const currentYear = new Date().getFullYear().toString();
        const chartDataPoints = [
            { label:"January", value:0 },
            { label:"February", value:0 },
            { label:"March", value:0 },
            { label:"April", value:0 },
            { label:"May", value:0 },
            { label:"June", value:0 },
            { label:"July", value:0 },
            { label:"August", value:0 },
            { label:"September", value:0 },
            { label:"October", value:0 },
            { label:"November", value:0 },
            { label:"December", value:0 }
        ]
        const userLeads = await Leads.findAll({
            where : {
                userUserId: req.userId.toString(),
                orgId: req.orgId.toString()
            }
        });
      
        if(userLeads == undefined || userLeads == null) {
            let error = new Error("Unable to find Leads");
            error.statusCode = 404;
            error.value = "last_name";
            throw(error);
        }

       CurrentYearsLeads = userLeads.filter(lead =>  new Date(lead.createdAt).getFullYear().toString() === currentYear );
     
       for(const lead of CurrentYearsLeads) {
           const leadMonth = lead.createdAt.getMonth();
           chartDataPoints[leadMonth].value = chartDataPoints[leadMonth].value + 1;
       }

       const chartPointValues = chartDataPoints.map(dataPoint => dataPoint.value);
       const maxValue = Math.max(...chartPointValues);

       res.status(200).json({ data: { chartDataPoints, maxValue, name: "Current Year Leads Dashboard" } });
        
    } catch (error) {
        if(!error.statusCode) {
            error.statusCode = 500;
            error.message = "Something Went Wrong"
        }
        next(error);
    }
}