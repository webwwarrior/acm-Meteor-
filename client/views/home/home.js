Template.home.onCreated(function(){
	this.subscribe('homeBoxes');
});

Template.home.helpers({
  // 'chosenCategory':function(){
  // 	var categoryId = Session.get('categoryId');
  // 	return Categories.findOne(categoryId);
  // },
  'boxes': function () {
    return Boxes.find();
  },
 });