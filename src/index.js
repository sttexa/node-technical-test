const express = require('express')
const app = express()
const port = 3000
const rssParser=require('./utilities/rss-parser')

const url="https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

app.get('/', (req, res) => {
  //res.send('Hello World!')
  console.log(rssParser(url))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})