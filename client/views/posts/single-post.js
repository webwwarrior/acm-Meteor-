Template.singlePost.helpers({
  categories: function() {
    //return Members.find({}, { limit: 6, sort: { createdAt: -1 } });
    return Categories.find({}, { sort: { submitted: -1 }});
  },
	post: function() {
		return Posts.findOne(Router.current().params._id);
	},
	sidePosts: function(){
		return Posts.find({}, {limit: 3, sort : {submitted: -1 } });
	},
  // 'galleryAlbums': function(){
  //   return GalleryAlbums.find({}, { sort: { start: 1 , limit: 3 }});
  // }
});

Template.singlePost.onCreated(function() {
	this.subscribe('onePostWithUser', Router.current().params._id);
	this.subscribe('posts');
  this.subscribe('publishGalleryAlbums');
});

Template.singlePost.onRendered(function(){
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
