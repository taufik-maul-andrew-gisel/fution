function getQuartersBetweenTwoDates(start: Date, end: Date) {
    let startYear = start.getFullYear();
    let startMonth = start.getMonth() + 1;
    let endYear = end.getFullYear();
    let endMonth = end.getMonth() + 1;

    // whenever the month hits 1, 4, 7, or 10, the quarter count increases
    let quarters = 0;
    while ((endYear > startYear) || (endMonth > startMonth)) {
        if ([1, 4, 7, 10].includes(startMonth)) {
            quarters++;
        }
        
        // increment month
        if (startMonth + 1 > 12) {
            startYear++;
            startMonth = 1;
        } else {
            startMonth++;
        }
    }
    return quarters;
}

export default getQuartersBetweenTwoDates;