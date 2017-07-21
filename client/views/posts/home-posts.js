Template.homePosts.onRendered(function(){
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

Template.homePosts.onCreated(function(){
  this.subscribe('postsWithUsers');
});

Template.homePosts.helpers({

  'truncatePost': function(){
    var t = this.body;
    var string = t.substring(0, 250)
    return string;
  },

  posts: function () {
    return Posts.find({}, { limit: 3, sort : {submitted: -1 }});
  }
});