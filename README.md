# fution

## your small business FUnding soluTION

## App Description

This application matches small businesses with several potential lenders. It consists of two main entities: small businesses, and lenders, who lend money to those businesses. Businesses are able to upload a description of their businesses and the amount of funds they require. Lenders are able to decide the amount of funds they want to lend, and determine the due date of when the businesses have to pay the loan back (at the latest) based on the profiling of each business.

## Endpoints

1. `POST /register`
2. `POST /register/business`
3. `POST /register/lender`
4. `POST /login`
5. `GET /business` (Home page that contains all lenders)
6. `GET /business/requests/` (consists of all lenders the business have sent request to)
7. `POST /business/request-funds/:lenderId`
8. `GET /lenders` (Home page that contains cards, lenders pov)
9. `POST /lenders/lend-funds/:businessId`

#### Details

10. `GET /business/:lenderId`
11. `GET /lenders/:businessId`
