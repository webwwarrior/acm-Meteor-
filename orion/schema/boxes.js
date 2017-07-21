Boxes.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title'
	},

	 position: {
		type: Number,
		label: 'Order',
		optional: true,
		// autoValue: function(){
		// 	var pos = this.field('position');

		// 	if (!pos.isSet) {
		// 		return 0;
		// 	}
		// }
	},

	content: orion.attribute('froala', {
      label: 'Content'
    }),



    visibilityHome: {
      type: Boolean,
      label: 'Check to turn this on the home page',
      defaultValue: false
  }
 })
);