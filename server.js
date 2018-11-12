const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.get('/api/v1/pomeranians', (req, res) => {
  res.send([{
    website: 'pomadoption.com',
    breed: 'Pomeranian',
    name: 'Joe',
    age: 5,
    details: 'Joe is v friendly and loves treats'
  }])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
