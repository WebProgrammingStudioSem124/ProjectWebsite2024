// Import necessary modules
const express = require('express');

// Initialize Express application
const app = express();
const port = 9000;


// Import routers


// Set EJS as the view engine
app.set('view engine', 'ejs');


// Get the webpage
app.get('/', (req, res) => {
  // Redirect to the homepage
  res.render('homepage');
});
app.get('/login', (req, res) => {
  // Render the 'login' view
  res.render('login', {text: '2024'});
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Use middleware
// Serve the static js and css files in public folder
app.use(express.static('public'));
