Router.configure({
  notFoundTemplate: 'notFound'
});

var onAfterAction = function(title, description, image) {
	return function() {
		if (!Meteor.isClient) {
			return;
		}
		GAnalytics && GAnalytics.pageview();
		SEO.set({
			title: (title && (orion.dictionary.get('home.title') + ' - ' + title)) || orion.dictionary.get('home.title'),
			link: {
				icon: orion.dictionary.get('home.favIcon.url'),
			},
			meta: {
				description: description || orion.dictionary.get('home.description')
			},
			og: {
				title: title || orion.dictionary.get('home.title'),
				description: description || orion.dictionary.get('home.description'),
				image: image || orion.dictionary.get('home.image.url')
			}
		});
	}
}


Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout',
	onAfterAction: onAfterAction()
});

Router.route('/test', {
  name: 'calculator',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Throughput Calculator')
});

Router.route('/search', {
  name: 'search',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Search')
});


Router.route('/team', {
  name: 'teamMembers',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Team Members')
});

Router.route('/contact', {
  name: 'contact',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Contact')
});

Router.route('/testimonials', {
  name: 'testimonialsAll',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Testimonials')
});

Router.route('/news-articles', {
  name: 'allPosts',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('News')
});


Router.route('/news-articles/:_id', {
  name: 'singlePost',
  layoutTemplate: 'layout',
  onAfterAction: function(title, description, image,){
      if (!Meteor.isClient ){
        return;
      }

    var article = Posts.findOne(this.params._id);
    article && onAfterAction(article.title)();
  }
});

Router.route('/sitemap', {
  name: 'sitemap',
  layoutTemplate: 'layout',
  onAfterAction: onAfterAction('Sitemap')
});

Router.route('/:slug', function() {
    var subs = Meteor.subscribe('page', this.params.slug);
    this.wait(subs);
    if (subs.ready()) {
      var page = orion.pages.collection.findOne({ url: this.params.slug });
      if (page) {
        var template = orion.pages.templates[page.template];
        if (template.layout) {
          this.layout(template.layout);
        }
        this.render(page.template, {data: page});
      } else {
        this.render('notFound');
      }
    }
  }, { name: 'newPages',
       layoutTemplate: 'layout',
       loadingTemplate: 'loading',

        data: function(){
          var page;
          page = orion.pages.collection.findOne({ url: this.params.slug }); 
          return {
            page: page
          }
        },

        onAfterAction: function( title, description, metatitle, metadescription ){
          // The SEO object is only available on the client.
          // Return if you define your routes on the server, too.
          if (!Meteor.isClient) {
            return;
          }

          var page = orion.pages.collection.findOne({ url: this.params.slug });
          SEO.set({
            title: page && (page.title && (orion.dictionary.get('home.title') + ' - ' + page.title)) || orion.dictionary.get('home.title'),
            //title: page.metatitle,
            link: {
               icon: orion.dictionary.get('home.favIcon.url'),
            },
            meta: {
              description: page && page.metadescription,
              //keywords : page.metakeywords
            },

            og: {
              title: page && page.metatitle,
              description: page && page.metadescription
            }
          });

      }
 });