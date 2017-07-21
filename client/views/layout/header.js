Template.header.onRendered(function(){
  var self = this;
  self.autorun(function() {
    
    Tracker.afterFlush(function() {
      self.$('.dropdown-toggle').dropdownHover();
    });
  });  
});

Template.header.helpers({
  // 'chosenCategory':function(){
  // 	var categoryId = Session.get('categoryId');
  // 	return Categories.findOne(categoryId);
  // },
  'pages': function () {
    return orion.pages.collection.find({}, { sort: { position: 1 } });
  },

  'parentPage': function(){
		return orion.pages.collection.find({ navbar: { $ne: false }, parentId: { $exists: false }}, { sort: { position: 1 }});
  },
  'childPage': function(parent){
		return orion.pages.collection.find({ navbar: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  },
  'grandChildPage': function(parent){
    return orion.pages.collection.find({ navbar: { $ne: false },  parentId: parent }, { sort: { position: 1 }});
  }
});

Template.mobileMenu.helpers({

  'pages': function () {
    return orion.pages.collection.find({}, { sort: { position: 1 } });
  },

  'parentPage': function(){
    return orion.pages.collection.find({ navbar: { $ne: false }, parentId: { $exists: false }}, { sort: { position: 1 }});
  },
  'childPage': function(parent){
    return orion.pages.collection.find({ navbar: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  },
  'grandChildPage': function(parent){
    return orion.pages.collection.find({ navbar: { $ne: false },  parentId: parent }, { sort: { position: 1 }});
  }
});