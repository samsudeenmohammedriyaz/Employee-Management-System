# Employee Management System
The Employee Management System is a web application built using Angular and JSON Server, providing CRUD (Create, Read, Update, Delete) functionality for employee data. This system allows users to add, edit, delete, and view employee details efficiently.

## Features
- Add Employees – Create new employee records.
- List Employees – View all employees in a tabular format.
- Edit Employees – Update existing employee details.
- Delete Employees – Remove employee records.
- Routing – Uses Angular Router for navigation.
- Bootstrap UI – Responsive design using Bootstrap 5.
- Fake REST API – Uses JSON Server for API simulation.

## Technologies Used
- Frontend: Angular 16, TypeScript
- Backend (Mock API): JSON Server
- Styling: Bootstrap 5
- Data Handling: HttpClientModule

## Project Structure
        Employee-Management-System/
        │-- src/
        │   ├── app/
        │   │   ├── add-user/
        │   │   ├── edit-user/
        │   │   ├── list-user/
        │   │   ├── notfound/
        │   │   ├── services/crud.service.ts
        │   │   ├── app-routing.module.ts
        │   │   ├── app.module.ts
        │   │   ├── app.component.html
        │   ├── assets/
        │-- backend/
        │   ├── database.json
        │-- package.json
        │-- angular.json
        │-- README.md

# Installation and Setup
## Prerequisites
- Install Node.js and npm
- Install Angular CLI
- Install JSON Server globally:
    npm install -g json-server
## Clone the Repository
    git clone https://github.com/samsudeenmohammedriyaz/Employee-Management-System.git
    cd Employee-Management-System
## Install Dependencies
    npm install
## Run the JSON Server (Mock API)
    npm run server
    This will start the API server at: http://localhost:3000/users
## Start the Angular Application
    ng serve
    Now open http://localhost:4200/ in your browser.

# CRUD Operations
## Add User
- Navigate to /add
- Enter Name, Email, and Phone
- Click Add to save the user.
## List Users
- Navigate to /list
- View all employees in a table.
## Edit User
- Click Edit on a user row.
- Modify the details and click Update.
## Delete User
- Click Delete on a user row.
- Confirm deletion to remove the user.

# Contributing
If you find any issues or have suggestions for improvement, feel free to fork the repository and submit a pull request.

# Author
SAMSUDEEN MOHAMMED RIYAZ S
