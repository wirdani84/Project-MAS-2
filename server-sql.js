const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Database setup
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) console.error('Database opening error:', err);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      skills TEXT,
      interests TEXT,
      bio TEXT
    )
  `);
});

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], function (err) {
    if (err) return res.status(500).send('Database error.');
    res.redirect('/welcome.html');
  });
});

// Handle profile form
app.post('/profile', (req, res) => {
  const { name, skills, interests, bio } = req.body;
  db.run('INSERT INTO profiles (name, skills, interests, bio) VALUES (?, ?, ?, ?)',
    [name, skills, interests, bio], function (err) {
      if (err) return res.status(500).send('Failed to save profile.');
      res.redirect('/skillswappers.html');
  });
});

// Serve SkillSwappers page with static + dynamic profiles
app.get('/skillswappers.html', (req, res) => {
  db.all('SELECT * FROM profiles', [], (err, rows) => {
    if (err) return res.status(500).send('Error loading profiles.');

    let userCards = rows.map(profile => `
      <div class="card">
        <img src="https://via.placeholder.com/150" alt="${profile.name}">
        <h3>${profile.name}</h3>
        <p><strong>Offers:</strong> ${profile.skills}</p>
        <p><strong>Wants:</strong> ${profile.interests}</p>
        <p>${profile.bio}</p>
        <button>Learn More</button>
      </div>`).join('');

    const staticHTML = fs.readFileSync(path.join(__dirname, 'skillswappers.html'), 'utf8');
    const finalHTML = staticHTML.replace(
      '<!-- Profile cards will be injected here by server -->',
      userCards
    );

    res.send(finalHTML);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});