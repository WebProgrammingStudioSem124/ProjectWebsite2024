const express = require('express');
const app = express();
const port = 9000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Redirect to the homepage
  res.redirect('/homepage');
});

app.get('/homepage', (req, res) => {
  // Render the 'homepage' view
  res.render('homepage');
});

app.get('/login', (req, res) => {
  // Render the 'login' view
  res.render('login');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Serve the static js and css files in public folder
app.use(express.static('public'));
