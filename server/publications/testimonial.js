Meteor.publish('testimonialsCarousel', function(){
	  //Meteor._sleepForMs(500);

  return Testimonials.find({},{ limit: 3, sort: {position: 1 }});
});

Meteor.publish('testimonialsAll', function(){
	  //Meteor._sleepForMs(500);

  return Testimonials.find({},{ sort: {position: 1 }});
});