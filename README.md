# Old Ink api 🎨
Welcome to the Old Ink's api documentation. This api recreates a fictional database where clients can register, log and create appointments with the different services that the tattoo studio provides.

## Table of Contents 📂
* <a href="#stack-⚓">Stack ⚓</a>
* <a href="#database-mysql-🌐">DataBase MySQL 🌐</a>
* <a href="#local-installation-💻">Local installation 💻</a>
* <a href="#routes-👾">Routes 👾</a>
* <a href="#author-✒️">Author ✒️</a>
* <a href="#acknowledgements-🙏">Acknowledgements 🙏</a>

## Stack ⚓
![Static Badge](https://img.shields.io/badge/TypeScript%20-%20blue)
![Static Badge](https://img.shields.io/badge/Express%20JS%20%20-%20black)
![Static Badge](https://img.shields.io/badge/MySQL%20%20-%20lightblue)
![Static Badge](https://img.shields.io/badge/NODE%20JS%20%20-%20green)
![Static Badge](https://img.shields.io/badge/JavaScript%20%20-%20orange)
![Static Badge](https://img.shields.io/badge/JWT%20(JSON%20Web%20Tokens)%20%20-%20purple)


## DataBase MySQL 🌐
![database_image](./img/database.JPG)

## Local installation 💻
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/backend_services `
2. Install dependencies
 ``` $ npm install --y ``` 
 ``` $ npm i typeorm --save ```
 ``` $ npm i reflect-metadata --save ```
 ``` $ npm i @types/node --save -dev ``` (if it isn't installed)
 ``` $ npm i mysql2 --save ```
 ``` $ npm i express ```
 ``` $ npm i typescript -D ```
3. Start Express on the server
 ``` $ npm run dev ``` 
4. Run migrations
 ``` $ npm run run-migrations ``` 

## Routes 👾
The routes worked for the project are:

<B>AUTHENTICATION (AUTH)</B>

- First we register a user.
- Log user


<B>USERS</B>
User routes include:

- Get all system users being Super_admin
- View user profile
- Edit username


<B>SERVICES</B>
Service routes include:

- See all services


<B>APPOINTMENTS</B>
Appointment routes include:

- Create a new appointment
- See your appointments
- See the appointment by id
- Edit an appointment by changing the service

## Author ✒️
* Ana Rius - student FSD
    * [GitHub](https://github.com/ariusvi)

## Acknowledgements 🙏
Special thanks to Daniel Tarazona for his incredible work as a teacher and above all for his infinite patience in helping to resolve any doubts and calm the panic.
Thanks to my classmates:
Pedro for his patience and help, especially to confirm that I understand things.
Marina for her moral support, joint laughter and tears, as well as her help.