require('dotenv').config();
const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
      encrypt: false,
      trustServerCertificate: true,
  }
};

console.log('DB config:', dbConfig); 

sql.connect(dbConfig)
    .then(pool => {
        if (pool.connected) {
            console.log('✅ Connected to SQL Server');
        }

        app.get('/users', async (req, res) => {
            try {
                const result = await pool.request().query('SELECT * FROM Users');
                res.json(result.recordset);
            } catch (err) {
                console.error('Query error:', err);
                res.status(500).send('Server error');
            }
        });

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });
         
        app.get('/skills', async (req, res) => {
        try {
          const result = await pool.request().query('SELECT * FROM Skills');
          res.json(result.recordset);
        } catch (err) {
          console.error('Query error:', err);
          res.status(500).send('Error retrieving skills');
        }
      });
      
      