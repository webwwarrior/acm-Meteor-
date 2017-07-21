Template.testimonialsAll.onCreated(function(){
	this.subscribe('testimonialsAll')
});


Template.testimonialsAll.helpers({
	testimonial:function(){
		return Testimonials.find();
	}
});


Template.testimonialsAll.onRendered(function(){

	var self = this;


	self.autorun(function(){
		
		 if (!Template.instance().subscriptionsReady()) return;
			/* ==============================================
		  	Testimonial Slider
		  	=============================================== */ 
			 $("#testimonial").owlCarousel({
			   
			        // navigation : false, // Show next and prev buttons
			        // slideSpeed : 300,
			        // paginationSpeed : 400,
			        // singleItem:true,
			        // autoHeight : true
			   
			    });
		
	});
});