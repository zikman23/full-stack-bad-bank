# full-stack-bad-bank

MITxPro Capstone - Full Stack Banking App

![screenshot](/screenshot.png)

## Overview

Bad Bank Project is a unsecure banking application that simulates a create account function, a login, deposit, withdraw and an all data summary page. The project was created using standalone Single Page React Routing as well as styling with Bootstrap.

This is a simple React app that presents the user with an ATM-like interface, with options to deposit or withdraw money, as well as display the current account balance. The goals of this exercise include:

1. Implement user-friendly UI and React components
2. Manage state of various UI elements
3. Validate form content in conjunction with state of other components

## Features & Improvements

The exercise included the following details, which are implemented in the app:

- Adding validation so users can’t withdraw more money than the account balance
- Modifying the user interface to require users to select deposit or withdraw before an input field is visible

I styled the app using basic CSS in order to give it a cleaner interface.

I attempted to implement dropdown menus and buttons using Bootstrap, but was unsuccessful at the time of submission. I plan to go back and complete the UI improvements.

## How to Run

[**Click this link**](https://full-stack-bad-bank-811f27fced78.herokuapp.com/#/) to view the app live on Heroku.

### Installing

- Clone this repo

- Use "npm install" to load a simple HTTP Server for the project

```
npm install
```

- Use "npm start" command in the project folder to start the React App development environment

```
npm start
```

- Navigate your Browser to...

```
localhost:3000
```

## Technologies Used

- React, Javascript, CSS, HTML
- Bootstrap

## Create React App

I converted this exercise to a React app by using `create-react-app`. Information can be found here: [**Create React App**](https://reactjs.org/docs/create-a-new-react-app.html).

You can learn more in the **Create React App documentation** [here](https://facebook.github.io/create-react-app/docs/getting-started) or [here](https://github.com/facebook/create-react-app).

### API Endpoints

<details>
<summary>Below are the API endpoints outlined in this project. </summary>

### create user account

app.get'/account/create/:name/:email/:uid'

### login user

app.get'/account/login/:email/:password'

### find user account

app.get'/account/find/:email'

### find one user by email - alternative to find

app.get'/account/findOne/:email'

### update - deposit/withdraw amount

app.get'/account/update/:email/:amount'

### all accounts

app.get'/account/all'

### delete user account by email

app.delete'/account/delete/:email'

</details>

## License

[MIT License](LICENSE)
