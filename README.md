# fution
## your small business FUnding soluTION

## App Description

This application matches small businesses with several potential lenders. It consists of two main entities: small businesses, and lenders, who lend money to those businesses. Businesses are able to upload a description of their businesses and the amount of funds they require. Lenders are able to decide the amount of funds they want to lend, and determine the due date of when the businesses have to pay the loan back (at the latest) based on the profiling of each business.

## Endpoints
1. `POST /register/business`
2. `POST /register/lender`
3. `POST /login`
4. `GET /business` (Home page that contains all lenders)
5. `GET /business/requests/` (consists of all lenders the business have sent request to)
6. `POST /business/request-funds/:lenderId`
7. `GET /lenders` (Home page that contains cards, lenders pov)
8. `POST /lenders/lend-funds/:businessId`
#### Details
9. `GET /business/:lenderId`
10. `GET /lenders/:businessId`

