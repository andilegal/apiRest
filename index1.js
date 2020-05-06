'use strict'

let express = require("express")
let cors = require("cors")
let bodyParser = require("body-parser")
let app = express()

let users = [{
  username: "anderson",
  name: "anderson",
  age: 30
}, {
  username: "maria",
  name: "maria",
  age: 25
}]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.get('/', function (req, res) {
  res.send({ response: "Home" })
})
app.get('/user', function (req, res) {
  res.send({ response: "user" })
})

app.get("/user/:username", function (req, res) {
  let username = req.params.username
  let hasUser = users.some(user => user.username === username)

  if (hasUser) {
    return res.json(users.filter(user => user.username === username)[0])
  }
  res.status(404).json({ error: 'usuario n cadastrado' })
})

app.post('/user', function (req, res) {
  let username = req.body.username
  let age = req.body.age
  let name = req.body.name
  let hasUser = users.some(user => user.username === username)
  if (!hasUser) {
    users.push({
      username,
      name,
      age
    })
  }

  res.json(users)
})
app.listen(3000)