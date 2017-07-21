Template.sitemap.helpers({
	'parentPage': function(){
		return orion.pages.collection.find({ parentId: { $exists: false }}, { sort: { position: 1 }});
	},
	'childPage': function(parent){
		return orion.pages.collection.find({ parentId: parent }, { sort: { position: 1 }});
	},
	'grandChildPage': function(parent){
	return orion.pages.collection.find({ parentId: parent }, { sort: { position: 1 }});
	}
});