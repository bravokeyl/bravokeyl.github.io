hexo.extend.helper.register('pithre_cat', function (post,cat) {
    var categories = post.categories;
    var catObj = '';

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
    } else {
      catObj = '{'+
          '"@type": "ListItem",'+
          '"position": 1,'+
          '"@id": "https://bravokeyl.com/general/",'+
          '"name": "General",'+
          '"image": "https://bravokeyl.com/images/general.png"'+
      '}';
    }

    if(cat){
      console.log(post.current_url.split('/'));
      catObj = '{'+
          '"@type": "ListItem",'+
          '"position": 1,'+
          '"@id": "https://bravokeyl.com/'+post.current_url+'",'+
          '"name": "'+post.category+'",'+
          '"image": "https://bravokeyl.com/images/'+post.current_url+post.current_url.split('/')[1]+'.png"'+
      '}';
    }

    return catObj;
});
