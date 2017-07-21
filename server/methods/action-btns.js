Meteor.methods({
	'removeItem':  function(id){
		var pagesRemove = orion.pages.collection.remove({_id: id }),
			postsRemove = Posts.remove({_id : id}),
			recipientRemove = Recipients.remove({_id : id }),
		    filesRemove = Files.remove({_id: id }),
		    sponsorRemove = Sponsors.remove({_id : id }),
		    branchesRemove = Branches.remove({_id : id }),
		    testimonialsRemove = Testimonials.remove({_id: id }),
		    teamRemove = Team.remove({_id : id }),
		    boxesRemove = Boxes.remove({_id : id }),
		    bannerRemove = RotatingBanner.remove({_id : id });



			myCollections = {
				sponsors: sponsorRemove,
				brancehs: branchesRemove,
				team: teamRemove,
				pages: pagesRemove,
				posts: postsRemove,				
				recipients: recipientRemove,
				files: filesRemove,
				//members: MembersRemove,
				category: businessCategoriesRemove,
				boxes: boxesRemove,
				testimonials: testimonialsRemove,
				banner: bannerRemove

		   }

		return myCollections;
	    
	}
});