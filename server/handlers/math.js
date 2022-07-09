const mathModel = require("../../storage/models/math.model");

const isweekend = async (req, res)=> {
    const { date } = req.body;
    try {
        const result = await mathModel.isweekend(date);
        res.json({
            data: result,
            error: null
        });
    } finally {
        res.end();
    }

}

const isLeapYear = async (req, res)=> {
    const { year } = req.body;
    try {
        const result = await mathModel.isLeapYear(year);
        res.json({
            data: result,
            error: null
        });
    } finally {
        res.end();
    }

}

module.exports = {
    isweekend,
    isLeapYear
};
