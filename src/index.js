const express = require('express')
const app = express()
const port = 3000
const rssParser=require('./utilities/rss-parser')
const auDateFormat=require('./utilities/format-iso-date-to-AEST')

const url="https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

const reformat=(items)=> {
  let result=new Array();
  for (let i=0; i<items.length; i++){
    result.push({
      title:items[i].title,
      audioUrl:items[i].enclosure.url,
      publishedDate: auDateFormat.convertISODateToAEST(items[i].isoDate)
    })
    if(result.length==10) break;
  }
  return result;
}

app.get('/', (req, res) => {
  //res.send('Hello World!')
  rssParser(url).then(response => res.send({
    title: "Houston We Have a Podcast",
    description: "description of podcast",
    episodes:  reformat(response.items)
} ));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})