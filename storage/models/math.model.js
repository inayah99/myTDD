function is_weekend (date) {
    let dt = new Date(date);
     
    return dt.getDay() == 6 || dt.getDay() == 0 ? true: false;
}

function isLeapYear(year) {
    return (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ? true: false;

}


module.exports = {
    is_weekend,
    isLeapYear

};

