Meteor.methods({
	'toggleBoxVisibility': function(id, hidden){
		check(id, String);
		check(hidden, Boolean);
		Boxes.update({_id: id}, { $set : { visibilityHome: hidden }});
	},


	'toggleRotatingBanner': function(imageid, imagehidden){
		check(imageid, String);
		check(imagehidden, Boolean);
		RotatingBanner.update({_id: imageid}, { $set : { visibility: imagehidden }});
	},

	'toggleNavbar' : function(pageid, pagehidden){
	    check(pageid, String);
	    check(pagehidden, Boolean);
	    console.log(pageid, pagehidden);
	    orion.pages.collection.update({_id: pageid}, {$set: { navbar: pagehidden }});		
	},

	'toggleFooter' : function(pageid, pagehidden){
	    check(pageid, String);
	    check(pagehidden, Boolean);
	    console.log(pageid, pagehidden);
	    orion.pages.collection.update({_id: pageid}, {$set: { footer: pagehidden }});		
	}
});