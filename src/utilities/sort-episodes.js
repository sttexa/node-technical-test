// To find the first 10 episodes in asc or the last 10 episodes in dsc,
// one efficient way is to sort all the episodes and take the top 10 of them.
// The quick-sort function from js itself is the best way to do that.
// Another way to do that is to set up a sorted array with 10 nodes,
// put 10 episodes in and check if episodes not in the array can replace those in the array.
// The second way might be able to improve efficiency a little bit but will reduce the readability of code.
const sortEpisodes=(items,order)=>{
    // If 'order' is 1, that will mean asc.
    // If 'order' is -1, that will mean dsc.
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