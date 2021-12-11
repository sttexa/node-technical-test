const sortEpisodes=(items,order)=>{
    items.sort(function(a, b) {
        if (new Date(a.isoDate) < new Date(b.isoDate)) {
            return 0-order;
        }
        if (new Date(a.isoDate) >new Date(b.isoDate)) {
            return order;
        }
        return 0 ;
    });
    return items;
}

module.exports=sortEpisodes