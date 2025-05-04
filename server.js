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

// Serve static files from the /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to SQLite database
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Failed to connect to SQLite DB:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT
  )
`);
// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Accept any login and redirect to welcome
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login received:', email);
  res.redirect('/welcome.html');
});

app.post('/register', (req, res) => {
  const { email, password, repeat } = req.body;

  if (!email || !password || password !== repeat) {
    return res.status(400).send('Invalid input or passwords do not match.');
  }

  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], function (err) {
    if (err) {
      console.error('Error inserting user:', err.message);
      return res.status(500).send('Server error: could not register user.');
    }

    console.log(`Registered user: ${email}`);
    res.redirect('/welcome.html');
  });
});

app.post('/profile', (req, res) => {
  const { name, skills, interests, bio } = req.body;

  console.log('Profile received:', name, skills, interests, bio);

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
  console.log(` Server running at http://localhost:${PORT}`);
});
