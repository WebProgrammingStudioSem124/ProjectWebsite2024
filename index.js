// Import necessary modules
const express = require('express');

// Initialize Express application
const app = express();
const port = 9000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
// logs the request method and path to the console. 
// function logquest(req, res, next){
//   console.log(`Request: ${req.method} for ${req.path}`);
//   next();
// }

// Use middleware
// app.use(logquest);
app.use(express.static('public')); // Serve the static js and css files in public folder

// Routes
app.get('/', (req, res) => {
  // Redirect to the homepage
  res.render('homepage');
});

app.get('/login', (req, res) => {
  // Render the 'login' view
  res.render('login', {text: '2024'});
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Missing: some middleware and routes folder: 
// Install middleware (First installed middleware then add those)
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Routes file accessed
// Create routes folder
// Include these in index.js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);
