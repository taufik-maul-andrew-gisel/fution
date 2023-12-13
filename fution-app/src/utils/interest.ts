import { Decimal } from "@prisma/client/runtime/library";

/**
 * Calculates compound interest combined with inflation. Applies quarterly (every 1/4 year).
 * The formula is found here: https://math.stackexchange.com/questions/2113705/can-interest-and-inflation-rates-be-combined
 * The inflation forecast data will be scraped from here: https://data.oecd.org/price/inflation-forecast.htm#indicator-chart
 * And will be re-scraped for every request a client makes to GET /record or GET /record/[id].
 * 
 * @param currValue current money in $
 * @param interest interest rate, in percentage (e.g., 11.2 for 11.2% interest rate)
 * @param inflation inflation rate, in percentage
 * @param period number of time periods (e.g., if a period is a month, 5 months would be 5 periods)
 */
function calculateInterest(currValue: Decimal, interest: Decimal, inflation: Decimal, period: Decimal) {
    // currValue * ((1 + interest / 100) / (1 + inflation / 100) ** period)
    const numr = interest.dividedBy(100).add(1);
    const denumr = inflation.dividedBy(100).add(1);

    return numr.dividedBy(denumr).pow(period).times(currValue);
}

export default calculateInterest;