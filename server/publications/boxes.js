Meteor.publish('boxes', function() {
  return Boxes.find();
});

Meteor.publish('homeBoxes', function() {
  return Boxes.find({ visibilityHome: { $ne: false } });
});