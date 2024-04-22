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