Meteor.publish('branches', function() {
  return Branches.find();
});