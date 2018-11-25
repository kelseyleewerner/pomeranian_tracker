const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'localmysql',
  database : 'pom_tracker'
});





app.use(express.static('dist'))

app.get('/api/v1/pomeranians', (req, res) => {
  connection.connect();

  connection.query('SELECT * from pomeranians', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });

  connection.end();

  // res.send([{
  //   website: 'pomadoption.com',
  //   breed: 'Pomeranian',
  //   name: 'Joe',
  //   age: 5,
  //   details: 'Joe is v friendly and loves treats'
  // }])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
