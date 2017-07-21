Meteor.publish('recipients', function(){
  return Recipients.find();
});