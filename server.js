const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Serve static files from the /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Accept any login and redirect to welcome
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('✅ Login received:', email);
  res.redirect('/welcome.html');
});

app.post('/profile', (req, res) => {
  const { name, skills, interests, bio } = req.body;

  console.log('✅ Profile received:', name, skills, interests, bio);

  // You could save this to a database — for now, just redirect
  res.redirect('/skillswappers.html');
});


// Optional future route for profile
// app.post('/profile', (req, res) => {
//   const { name, skills, interests, bio } = req.body;
//   // You can insert into DB here if needed
//   res.redirect('/skillswappers.html');
// });

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
