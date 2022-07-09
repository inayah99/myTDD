function is_weekend (date) {
    let dt = new Date(date);
     
    return dt.getDay() == 6 || dt.getDay() == 0 ? true: false;
}