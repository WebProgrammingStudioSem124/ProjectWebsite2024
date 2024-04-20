const express = require('express');
const app = express();
const port = 9000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/homepage', (req, res) => {
  // Render the 'homepage' view
  res.render('homepage');
});

app.get('/login', (req, res) => {
  // Render the 'homepage' view
  res.render('login');
});

