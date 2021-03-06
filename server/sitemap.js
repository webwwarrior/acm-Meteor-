sitemaps.add('/sitemap.xml', function() {
  
  var basicRoutes = ['home', 'contact', 'testimonialsAll', 'sitemap', 'allPosts', 'singlePost'];
  
  var items = [];

  _.each(basicRoutes, function(routeName){
    items.push({
      page: Router.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    })
  });

  orion.pages.collection.find().forEach(function(doc) {
    var item = {
      page: doc.path(),
      lastmod: doc.updatedAt || doc.createdAt,
      changefreq: 'weekly'
    };
    items.push(item);
  });

  return items;
});