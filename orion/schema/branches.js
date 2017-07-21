Branches.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Branch Name'
	},

	content: orion.attribute('froala', {
      label: 'Content'
    }),

    locationLink: {
    	type: String,
    	label: 'View Location Link',
        optional: true
    },
    locationText: {
    	type: String,
    	label: 'View Location Text',
        optional: true
    }
 })
);