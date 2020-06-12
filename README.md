This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Authentication HOC Project

This is an advance react practice for training authentication workflow in a full stack envrionment:

### `Backend`

- Create Backend Authentication using local strategy (email/password) and providing Json Web Token infrastructure.
- The required endpoints are Register, Login and a Current User
- Register and Login are public Endpoints
- Register should validate that the incoming request contains an Email, password, confirmation password and a Name, given these values, it should create a User Hashing and Salting the Password if the Email is not already in use.
- Login should validate the Email and the password.
- The Current User endpoint should return the User Model

### `Frontend`

- The frontend should be able to send a Register payload to the backend via the Register Page Form. If the register is success it should redirect the user to the Login page, if it is not success it should notify the user about the error.
- The Login should be able to send the Login payload to the backend via the Login Page Form. If the Login is success it should store the Token in local storage and redirect the user to the Dashboard page, if it is not success it should notify the user about the error.
- The Login, Register, Landing pages are Public
- The Dashboard page is Private, if you try to access the Private Pages without being authenticated it should redirect you to the Login Page
- The Login and Register Tabs in the Menu should be replaced by a Logout Tab if the user is already Logged In
- If you already have a valid token saved in your local storage, the app should authenticate you as persistence authentication

### `Extra`

- If you try to access the Login Page or the Register Page while being logged in it should redirect you to the dashboard page.\*

## Tech Stack

This project is using MERN Stack

- Mongo
- Express
- React
- Node

### Mongo

Mongo is being used to store the User using Mongoose to comunicate with the mongo driver

### Express

Express is used as an HTTP codebase to serve the backend server API

### React

React serves the client side, no aditional library is required (Do not install Redux)

### Node

Backend platform

## Code Commands

### `node server/server.js`

This will start a listener to the backend

### `npm start`

This will start the client side
