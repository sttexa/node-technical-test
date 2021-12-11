const express = require('express');
const router = express.Router();
const rssParser = require("../utilities/rss-parser");
const reformat = require("../utilities/reformat");

const url="https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

router.get('/', (req, res,next) => {
    //res.send('Hello World!')
    rssParser(url).then(response => res.send({
        title: "Houston We Have a Podcast",
        description: "description of podcast",
        episodes:  reformat(response.items)
    } ));
})

module.exports = router;