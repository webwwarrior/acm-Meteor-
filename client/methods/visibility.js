Template.orionBootstrapPagesIndex.events({
	"change .switch-navbar input": function(event, template) {
	  console.log('switched');
	  Meteor.call('toggleNavbar', event.currentTarget.dataset.id, event.currentTarget.checked);
	},

	"change .switch-footer input": function(event, template) {
	  console.log('switched');
	  Meteor.call('toggleFooter', event.currentTarget.dataset.id, event.currentTarget.checked);
	}
});

Template.orionBootstrapLayout.events({
	"change .switch-rotating-banner input": function(event, template) {
		  Meteor.call('toggleRotatingBanner', event.currentTarget.dataset.id, event.currentTarget.checked);
	  },

	  "change .switch-box input": function(event, template) {
		  Meteor.call('toggleBoxVisibility', event.currentTarget.dataset.id, event.currentTarget.checked);
	  }
});