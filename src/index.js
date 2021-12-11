const express = require('express')
const app = express()
const port = 3000
const sortRouter = require('./router/sort');
const homeRouter = require('./router/home');


app.use('/sort', sortRouter); //Router to "localhost:3000/sort"

app.use('/', homeRouter); //Router to "localhost:3000"


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})