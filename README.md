## FuTion: your small business FUnding soluTION

## App Description

This application matches small businesses with several potential lenders. It consists of two main entities: small businesses, and lenders, who lend money to those businesses. Businesses are able to upload a description of their businesses and the amount of funds they require. Lenders are able to decide the amount of funds they want to lend, and determine the due date of when the businesses have to pay the loan back (at the latest) based on the profiling of each business.

## Endpoints

1. `POST /login`
2. `POST /register`

##### Business

3. `GET /business` get all businesses
4. `POST /business` register a new business
5. `GET /business/:id` get a business by id

##### Lender

6. `GET /lender` get all lenders
7. `POST /lender` register a new lender
8. `GET /lender/:id` get a lender by id

##### Record

9. `GET /record` get all records
10. `POST /record` register a new record -> business request loan to lender
11. `GET /record/:id` get a record by id
12. `PUT /record/:id` update an existing record -> negotiation process between business and lender
13. `PATCH /record/:id` change the status of an existing record (e.g. from DEBT to PAID)
14. `GET /record/debt/:id` get the amount for a business to pay its debt to a lender after interest and inflation
