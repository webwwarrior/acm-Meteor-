orion.pages.addTemplate({
    layout: 'layout',
    template: 'pagesSimple',
    name: 'Simple',
    description: 'Simple template'
}, {
	// text: {
	// 	type: String,
	// 	label: 'Small text under title',
	// 	optional: true
	// },
	// subTitle: {
	// 	type: String,
	// 	label: 'Sub Title',
	// 	optional: true
	// },

	parallax: orion.attribute('image', {
	    label: 'Parallax Image',
	    optional: true
	}),
	
	parentId: {
		type: String,
		label: "Parent",
		optional: true,
		autoform: {
			options: function() {
		  		return orion.pages.collection.find().map(function(page) { 
		  			return { 
		  				label: page.title, value: page.title 
		  			}; 
		  		});
			}
		}
	},
	position: {
		type: Number,
		label: 'Order',
		optional: true,
		autoValue: function(){
			var pos = this.field('position');

			if (!pos.isSet) {
				return 0;
			}
		}
	},	

	boxId: orion.attribute('hasMany', {
		label: 'Select Boxes',
		optional: true
	}, {
		collection: Boxes,
		titleField: 'title',
		publicationName: 'pagesBoxes'
	}),

	// metatitle: {
	// 	type: String,
	// 	label: 'Meta title',
	// },

	metadescription: {
		type: String,
		label: 'Meta description',
		optional: true,
		autoform: {
		    afFieldInput: {
		      type: "textarea",
		      rows: 10
		    }
		  }
	},

	metakeywords:{
		type: String,
		optional: true,
		label: 'Meta keywords',
		autoform: {
		    afFieldInput: {
		      type: "textarea",
		      rows: 10
		    }
		  }
	},
	
    content: orion.attribute('froala', {
      label: 'Content',
      optional:true
    }),

    navbar: {
	    type: Boolean,
	    label: 'Visible inside navbar?',
	    defaultValue: true
    },

    footer: {
    	type: Boolean,
    	label: 'Visible inside footer?',
    	defaultValue: true
    }
});

orion.pages.collection.helpers({
  // store: function () {
  // 	return Stores.find({_id: { $in: (this.storeId || []) } });
  // },
  box: function () {
    //return Boxes.findOne(this.boxId); // grabs only one box
    return Boxes.find({_id: { $in: (this.boxId || [] ) } }, { sort : { position: 1 }} ); //grabs multiple boxes
  }
});

PagesIndex = new EasySearch.Index({
  collection: orion.pages.collection,
  fields: ['title', 'content'],
  engine: new EasySearch.MongoDB({
    sort: function () {
	  return { createdAt: -1 };
	},

    selector: function(searchObject, options, aggregation) {
      var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      selector.navbar = { $ne: false };
      return selector;
    }
  })
});