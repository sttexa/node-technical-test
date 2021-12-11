const express = require('express')
const app = express()
const port = 3000
const sortRouter = require('./router/sort');
const homeRouter = require('./router/home');


app.use('/sort', sortRouter);

app.use('/', homeRouter);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})