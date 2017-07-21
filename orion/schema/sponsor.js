Sponsors.attachSchema(new SimpleSchema({
	image: orion.attribute('image', {
		label: 'Sponsor Image (width: 196px, height: 45px)'
	}),

   website: {
		type: String,
		label: 'Website',
		optional: true
	}
  })
);