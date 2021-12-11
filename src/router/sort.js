const express = require('express');
const router = express.Router();
const rssParser = require("../utilities/rss-parser");
const reformat = require("../utilities/reformat");
const sortEpisodes = require('../utilities/sort-episodes')

const url = "https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss";

router.get('/', function (req, res, next) {
    let order = -1;

    if (req.query.order == 'asc') order = 1;
    if (req.query.order == 'dsc') order = -1;

    rssParser(url).then(response => res.send({
        title: "Houston We Have a Podcast",
        description: "description of podcast",
        episodes: reformat(sortEpisodes(response.items, order))
    }));


});

module.exports = router;