const auDateFormat = require("./format-iso-date-to-AEST");

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


module.exports = reformat;