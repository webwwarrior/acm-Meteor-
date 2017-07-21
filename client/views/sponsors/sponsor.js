Template.sponsors.onCreated(function(){
  this.subscribe('sponsorPublish');
});

Template.sponsors.helpers({
  sponsorEach: function(){
	return Sponsors.find();
 }
});

// Template.sponsors.onRendered(function(){
// 	this.autorun(function() {
  

//     if (!Template.instance().subscriptionsReady()) return;
//           //clientCarosule();
//     }); 
	
// });