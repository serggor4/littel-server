const express = require('express')//подключаем библеотеку express
const bodyParser = require('body-parser')
const app = express()//создаёсм экзэмпляр сервера


const users = [
  {
    name: "Sergey",
    login: "louhjkiu",
    pasword: "paqdshkh"
  },
  {
    name: "Sergey2",
    login: "louhjkiu2",
    pasword: "paqdshkh2"
  },
  {
    name: "Sergey3",
    login: "louhjkiu3",
    pasword: "paqdshkh3"
  }
]

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/auch', (req, res) => {
  //console.log(req.body.login)
  let user = users.filter(user => user.login == req.body.login && user.pasword == req.body.pasword)[0]
  res.send(user)
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
