Meteor.methods({
	'changeBannerOrder' : function(savedid, savedval){
		check(savedid, String);
		check(savedval, String);
		console.log( savedid, savedval);
		RotatingBanner.update({_id:savedid}, {$set: {position: savedval}});
	},

	'changeBoxOrder' : function(savedid, savedval){
		check(savedid, String);
		check(savedval, String);
		console.log( savedid, savedval);
		Boxes.update({_id:savedid}, {$set: {position: savedval}});
	},

	
	'changePageOrder' : function(savedid, savedval){
		check(savedid, String);
		check(savedval, String);
		console.log( savedid, savedval);
		orion.pages.collection.update({_id:savedid}, {$set: {position: savedval}});
	},

	'changeRecipientOrder': function(savedid, savedval){
		check(savedid, String);
		check(savedval, String);
		console.log( savedid, savedval);
		Recipients.update({_id:savedid}, {$set: {position: savedval}});
	},

	'changeTestimonialOrder' : function(savedid, savedval){
		check(savedid, String);
		check(savedval, String);
		console.log( savedid, savedval);
		Testimonials.update({_id:savedid}, {$set: {position: savedval}});
	},

});