# Login Application - FE
## Problem Statement
Creating a basic login application.
## Technologies Used
-  React
-  JavaScript
-  Axios
-  MUI
-  Redux
## Description / Features
This login application is web application that showcase the basic of an user login. This application works together with a Spring-boot application that serves as the BE. Here's how it works:

- <b>Login:</b> User will input their login credentials which if valid would allow them to enter the application. Validation checks include checking if either field is empty, if username is in the proper format, if username and passowrd entered exists in the database

- <b>Role Based Access:</b> Depending on the role the user has, they will be able to view and access different features.
    - Manager Role :
        - Able to view landing page with user details 
        - Able to view webpage that shows all users in the DataBase at the moment
            - Account available :
                - <b>UserName:</b> john@example.com
                - <b>Password:</b> password1
    - User Role :
        - Able to view landing page with user details
            - Account available :
                - <b>UserName:</b> mark@example.com
                - <b>Password:</b> password2 

## Usage
To Run the application in you local machine, follow these steps
### Prerequisites
Make sure you have the following installed:

<b>Node.js</b>: If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/) and follow the installation instructions.

<b>npm</b>: npm is the package manager for Node.js, and it comes bundled with Node.js. You can check if it's installed by running `npm -v` in your command prompt.

### Installation & Setup
1. Open Command Prompt:
    - Press the Windows symbol key, type `cmd` and hit Enter to open Command Prompt.
2. Clone the Repository
    - Use the `git clone` command to clone the Lunch Location Randomizer FE repository to your local machine:
    ```sh
    git clone <respository URl>
    ```
3. Navigate to the Project Folder
    - Change your current directory to the project folder:
    ```sh
    cd <project folder>
    ```
4. Install Dependencies:
    - Use `npm` to install the project's dependencies:
    ```sh
    npm install
    ```
### Running the Application
Start the Development Server:
- Run the following command to start the development server:
    ```sh
    npm run dev
    ```
Once the development server is running, open your web browser and go to http://localhost:3000 to access the Login application.

## Room For Improvement / Future Features
Below are some ways that this app can be improved upon! Here is a list of some ideas for future improvements:
- Include Jwt tokens for authentication
- Add more features like edit profile, delete account, create account
- Add session timeout to logout user after a certain time

## Author
- Name : Chester Ng
- Email : chesternyk19@gmail.com
- LinkedIn Profile : https://www.linkedin.com/in/chester-ng-b81222214

