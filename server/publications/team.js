Meteor.publish('teamPub', function(){
	  //Meteor._sleepForMs(500);

  return Team.find({},{ sort: {position: 1 }});
});
