Template.allPosts.onCreated(function() {
	this.subscribe('postsWithUsers');
	this.subscribe('posts');
  this.subscribe('publishGalleryAlbums');
  //this.subscribe('sidePostsPub');
});

Template.allPosts.helpers({

  'truncatePost': function(){
    var t = this.body;
    var string = t.substring(0, 250)
    return string;
  },

  postsIndex: () => PostsIndex,

  categories: function() {
    //return Members.find({}, { limit: 6, sort: { createdAt: -1 } });
    return Categories.find({}, { sort: { createdAt: -1 }});
  },
   inputAttributes: function () {
    return { 'class': 'form-control', 'placeholder': 'Start searching...' };
  },
  showMore: function () {
      return false;
  },

  resultsCount: function () {
      return PostsIndex.getComponentDict().get('count');
  },

  // categories: function() {
  //   //return Members.find({}, { limit: 6, sort: { createdAt: -1 } });
  //   return Categories.find({}, { sort: { submitted: -1 }});
  // },
  
	allPosts: function () {
		return Posts.find();
	},
	sidePosts: function(){
		return Posts.find({}, { limit: 3, sort : {submitted: -1 } });
	},
  // 'galleryAlbums': function(){
  //   return GalleryAlbums.find({}, { sort: { start: 1 , limit: 3 }});
  // }
});

Template.allPosts.onRendered(function(){
  // Scroll to a Specific Div
  if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
      var HeaderHeight = $('.header-lower').height();
      var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
         scrollTop: $(target).offset().top - HeaderHeight
       }, 1000);
  
    });
  }
});

Template.allPosts.events({

    'change .category-filter': function (e) {
      PostsIndex.getComponentMethods()
        .addProps('categoryFilter', $(e.target).val())
      ;
    }
  });

