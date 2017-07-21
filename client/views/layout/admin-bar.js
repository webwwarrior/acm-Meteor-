Template.adminBar.events({
	'click .logout': function(){
		Meteor.logout();
	}
});