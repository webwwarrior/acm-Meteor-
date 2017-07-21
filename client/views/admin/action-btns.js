Template.actionBtns.events({
	"click  #deleteRow": function(event, template){
		event.preventDefault();
		if ( confirm('Are you sure?'))
			Meteor.call('removeItem',this._id);
	}

});

Template.deleteRegUser.events({
	"click  #deleteRegUser": function(event, template){
		event.preventDefault();
		if ( confirm('Are you sure?'))
			Meteor.call('removeUserCall',this._id);
	}

});



