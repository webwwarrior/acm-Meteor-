RotatingBanner.attachSchema(new SimpleSchema({
	image: orion.attribute('image', {
		label: 'Image (2000 x 900)',
		optional: true
	}),
	
	title: {
		type: String,
		label: 'Title (First Word)'
	},
	title2: {
		type: String,
		label: 'Title (Second Word)',
		optional: true
	},

	subTitle: {
		type: String,
		label: 'Sub Title',
		optional: true
	},

	btnLink: {
		type: String,
		label: 'Button Link',
		optional: true
	},

	btnText: {
		type: String,
		label: 'Button Text',
		optional: true
	},

	position: {
	    type: Number,
	    label: 'Order',
	    optional: true,
	  //   autoValue: function(){
	  //     var pos = this.field('position');

	  //     if (!pos.isSet ){
	  //       return 0;
	  //   }
	  // }
	},

	visibility: {
	    type: Boolean,
	    label: 'Check to add inside slideshow',
	    defaultValue: true
	},
	openInNewTab: {
		type: Boolean,
		label: 'Check to open in new tab',
		optional: true
	}
}));