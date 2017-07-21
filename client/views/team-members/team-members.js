Template.teamMembers.helpers({
	team:function(){
		return Team.find();
	}
});

Template.teamMembers.onCreated(function(){
	this.subscribe('teamPub')
});