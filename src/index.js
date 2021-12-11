const express = require('express')
const app = express()
const port = 3000
const rssParser=require('./utilities/rss-parser')
const auDateFormat=require('./utilities/format-iso-date-to-AEST')
const sortRouter = require('./router/sort');
const homeRouter = require('./router/home');


app.use('/sort', sortRouter);

app.use('/', homeRouter);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})