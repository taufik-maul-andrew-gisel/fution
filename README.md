## FuTion: your small business FUnding soluTION

## FuTion: your small business FUnding soluTION

This application is aimed to aid small businesses in matching them with several potential lenders. It consists of two main entities: 1) small businesses, and 2) lenders, who can lend money to those businesses (interests might apply). Businesses are able to enquire a loan by submitting information about what they do, what they need, and the amount of funds they require. Lenders are able to decide the amount of funds they want to lend, and determine the due date of when the businesses have to pay the loan back (at the latest) based on the profiling of each business. These two entities can negotiate with each other until they reach an agreement, and they have the option to utilize the real-time video call feature from this application to ensure a smooth negotiation process.

## Server Endpoints (all start with `/api`)

1. `POST /login`
2. `POST /register`

##### Business

3. `GET /business`
4. `POST /business`
5. `GET /business/:id`

##### Lender

6. `GET /lender`
7. `POST /lender`
8. `GET /lender/:id`

##### Record

9. `GET /record`
10. `POST /record`
11. `GET /record/:id`
12. `PUT /record/:id`
13. `PATCH /record/:id`
14. `GET /record/debt/:id`

---

# MVP \#1: Credential

# MVP \#2: Interest

Calculates the compound interest of each business's loan debt, both in the _present_ as well as several terms in the _future_. The interest applies for each term, where a term -- in this project -- is defined as a quarter of a year. Whenever the current date's month hits 1, 4, 7, or 10 (in other words, when the date hits the 1<sup>st</sup> of January, April, July, or October), the term changes, hence a new interest is compounded to the total amount of debt the business has to pay back to its lender.

Every time the API endpoint `GET /record/debt/:id` is called, the whole algorithm of interest calculation will be re-executed, calling `new Date()`, i.e., the current date, to ensure that the amount of terms for the interest to be applied will always be up-to-date.

The formula is obtained from [here](https://math.stackexchange.com/questions/2113705/can-interest-and-inflation-rates-be-combined). Note that it also takes into account the inflation data and compounds it to the overall calculation. More information about the inflation implementation is explained below.

# MVP \#3: Inflation

The inflation data (past, present, and future) is obtained from this [website](https://data.oecd.org/price/inflation-forecast.htm). Whenever `GET /record/debt/:id` is called, not only the whole algorithm will be re-executed, but also the inflation data from this [website](https://data.oecd.org/price/inflation-forecast.htm) will be re-obtained and included in the overall calculation of the algorithm. This ensures future predictions about the inflation rate will always be up-to-date.
