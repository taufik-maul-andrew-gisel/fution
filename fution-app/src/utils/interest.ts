import { Decimal } from "@prisma/client/runtime/library";

/**
 * Calculates compound interest combined with inflation. Applies quarterly (every 1/4 year).
 * The formula is found here: https://math.stackexchange.com/questions/2113705/can-interest-and-inflation-rates-be-combined
 * The inflation forecast data will be scraped from here: https://data.oecd.org/price/inflation-forecast.htm#indicator-chart
 * And will be re-scraped for every request a client makes to GET /record or GET /record/[id].
 * 
 * @param initValue current money in $
 * @param interest interest rate, in percentage (e.g., 11.2 for 11.2% interest rate)
 * @param inflations array of inflation rates, in percentage. The array length determines the period (a period is 1/4 year)
 * @param nextPredInfls the predicted inflation rate in the next time periods
 */
function calculateInterest(initValue: Decimal, interest: Decimal, inflations: Decimal[], nextPredInfls: Decimal[]) {
    const output = {
        init: initValue,
        curr: initValue,
        next: [initValue, initValue, initValue, initValue],
    }

    // uncomment to enforce 0% interest (although inflation rate will still apply, and intended to always apply)
    // interest = new Decimal(0);

    // calc curr amount to pay after interest
    let RHS = new Decimal(1);
    inflations.forEach(infl => {
        const innerRHS = interest.add(infl).dividedBy(400).add(1);
        RHS = innerRHS.times(RHS);
    })
    output.curr = RHS.times(output.curr);

    RHS = new Decimal(1);
    nextPredInfls.forEach((infl, i) => {
        const innerRHS = interest.add(infl).dividedBy(400).add(1);
        RHS = innerRHS.times(RHS);
        output.next[i] = RHS.times(output.curr);
    })

    // console.log(inflations);

    return output
}

export default calculateInterest;