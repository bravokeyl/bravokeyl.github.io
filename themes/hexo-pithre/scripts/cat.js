hexo.extend.helper.register('pithre_cat', function (post) {
    const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    var categories = post.categories;
    var catObj = '';

    if (!categories || !categories.length) return "general";
    if (categories) {
      const len = categories.length;
      categories.map(function(cat,i){
        id = '"@id": "'+cat.permalink+'",';
        name = '"name": "'+cat.name+'",';
        image = '"image":"https://bravokeyl.com/images/'+cat.slug+'.png"';
        sep = ',';
        if( len === i+1) {
          sep = '';
        }
        item = id + name + image ;
        catObj += '{"@type": "ListItem","position": '+(i+1)+','+item+'}'+ sep;
      });
    }

    return catObj;
});
