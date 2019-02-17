const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');

const port = 3000
const app = express()
const upload = multer();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'localmysql',
  database : 'pom_tracker'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

connection.connect();

app.get('/api/v1/pomeranians', (req, res) => {
  connection.query('SELECT * from pomeranians', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });
})

app.post('/api/v1/adoptionUrl', (req, res) => {
  connection.query(`INSERT INTO adoptionUrls(url) VALUES("${req.body.url}")`, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
})

app.get('/api/v1/adoptionUrls', (req, res) => {
  connection.query('SELECT * from adoptionUrls', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
