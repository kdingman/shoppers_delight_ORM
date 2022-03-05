# eCommerce Back End ORM

## **Description**
The challenge was to build the back end for an e-commerce site. The goal was to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.    

**Acceptance Criteria**   
GIVEN a functional Express.js API   
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file   
THEN I am able to connect to a database using Sequelize   
WHEN I enter schema and seed commands   
THEN a development database is created and is seeded with test data   
WHEN I enter the command to invoke the application   
THEN my server is started and the Sequelize models are synced to the MySQL database   
WHEN I open API GET routes in Insomnia for categories, products, or tags   
THEN the data for each of these routes is displayed in a formatted JSON   
WHEN I test API POST, PUT, and DELETE routes in Insomnia   
THEN I am able to successfully create, update, and delete data in my database   

## **Installation**
1. Clone GitHub Repository   
2. In the Root Directory of the Project, in the terminal command line enter npm i to download the dependencies   
3. Initiate the Database   
    a. mysql -u root -p   
    b. enter your MySQL password   
    c. source db/schema.sql, SHOW databases; will show the databases available, USE ecommerce_db; will use that database   
    d. type exit to exit out of MySQL   
4. In the terminal command line enter npm run seed, to seed the data into your tables   
5. Run node server or npm start to start up your server   

## **Technology Used**
Node.js - npm i   
Express.js - npm i express   
MySQL2 - npm i mysql2   
Sequelize - npm i sequelize   
dotenv - npm i dotenv   
Insomnia - to run the api routes      

## **Walk Through Videos**
[MySQL](https://drive.google.com/file/d/1ckRUTAvo83aJp9-OVLX1qhIzqN7MJO9D/view)

[Insomnia API Routes](https://drive.google.com/file/d/1Oti9CbjjznJ5wDiyEPirKTzXnoAYeXOh/view)

## **Contact**
GitHub: https://github.com/kdingman   
Email: kcdonlan@yahoo.com
