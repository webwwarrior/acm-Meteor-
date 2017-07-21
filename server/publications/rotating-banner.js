Meteor.publish('banners', function() {
  return RotatingBanner.find();
});
