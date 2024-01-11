//core modules
const fs = require('fs');

//external modules
const express = require('express');
const app = express();

//custom modules
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//third party middleware
const morgan = require('morgan');

//Middleware
//app.use(function) adds a function to the middleware stack
//next() is used to go to the next middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`)); //not an api endpoint just lets you access the files inside the public folder and it's subfolders

app.use((req, res, next) => {
  console.log('Hello from middleware!');

  next();
});

//Mounting routers on two different routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
