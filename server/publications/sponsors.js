Meteor.publish('sponsorPublish', function(){
  return Sponsors.find();
});