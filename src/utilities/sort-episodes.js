const sortEpisodes=(items)=>{
    items.sort(function(a, b) {
        if (new Date(a.isoDate) < new Date(b.isoDate)) {
            return -1;
        }
        if (new Date(a.isoDate) >new Date(b.isoDate)) {
            return 1;
        }
        return 0 ;
    });
    return items;
}

module.exports=sortEpisodes