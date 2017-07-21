Meteor.publish('filesPub', function(){
  return Files.find();
});