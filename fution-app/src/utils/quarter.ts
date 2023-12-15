function getQuartersBetweenTwoDates(start: Date, end: Date) {
    let startYear = start.getFullYear();
    let startMonth = start.getMonth() + 1;
    let endYear = end.getFullYear();
    let endMonth = end.getMonth() + 1;
    const output = {
        quarters: 0,
        start: { 
            year: startMonth < 10 ? startYear : startYear + 1, 
            q: startMonth < 10 ? Math.floor((startMonth + 5) / 3) : 1 
        },
        end: { year: endYear, q: Math.floor((endMonth + 2) / 3) }
    }

    // whenever the month hits 1, 4, 7, or 10, the quarter count increases
    while ((endYear > startYear) || (endMonth > startMonth)) {
        if ([1, 4, 7, 10].includes(startMonth)) {
            output.quarters++;
        }
        
        // increment month
        if (startMonth + 1 > 12) {
            startYear++;
            startMonth = 1;
        } else {
            startMonth++;
        }
    }
    return output;
}

export default getQuartersBetweenTwoDates;