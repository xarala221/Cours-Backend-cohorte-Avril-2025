const express = require('express')

const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenue dans le cours Express')
})

app.get('/a-propos', (req, res) => {
  console.log('req', req.path)
  res.send('Page a propos')
})

app.listen(port, () => {
  console.log(`Le serveur Express tourne à l'adresse http://localhost:${port}/`)
})
