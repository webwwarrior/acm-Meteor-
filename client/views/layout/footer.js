Template.footer.onCreated(function(){
  this.subscribe('postsWithUsers');
});

Template.footer.helpers({
  'parentPage': function(){
    return orion.pages.collection.find({ privacy: { $ne: true }, footer: { $ne: false }, parentId: { $exists: false }}, { sort: { position: 1 }});
  },
  'childPage': function(parent){
    return orion.pages.collection.find({ privacy: { $ne: true }, footer: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  },
  'grandChildPage': function(parent){
  return orion.pages.collection.find({ privacy: { $ne: true }, footer: { $ne: false }, parentId: parent }, { sort: { position: 1 }});
  }
});

Template.footer.onRendered(function() {
  Session.set('contactSent', false);
});

Template.footer.helpers({
  posts: function () {
    return Posts.find({}, { limit: 3, sort : {submitted: -1 }});
  },
  contactSent: function() {
    return Session.get('contactSent');
  },
});

AutoForm.addHooks('contactFormFooterId', {
  onSuccess: function(formType, result) {
    Session.set('contactSent', true);
  },
});