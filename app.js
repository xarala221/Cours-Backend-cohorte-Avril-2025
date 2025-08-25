const http = require('http')

const hote = '127.0.0.1'
const port = 3000

const serveur = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Bienvenue sur mon serveur')
})

serveur.listen(port, hote, () => {
  console.log(`Le serveur tourne à l'adresse http://${hote}/${port}/`)
})
