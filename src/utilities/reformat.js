const auDateFormat = require("./format-iso-date-to-AEST");

// Reformat the RSS feeds from original json format to desired json format
// The only parameter needed is the "items" from RSS feeds response.
const reformat=(items)=> {
    let result=new Array();
    for (let i=0; i<items.length; i++){
        result.push({
            title:items[i].title,
            audioUrl:items[i].enclosure.url,
            publishedDate: auDateFormat.convertISODateToAEST(items[i].isoDate) // Convert the Date format
        })
        if(result.length==10) break; // Only 10 episodes needed
    }
    return result;
}

module.exports = reformat;