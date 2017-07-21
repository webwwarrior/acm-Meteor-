orion.dictionary.addDefinition('logo', 'home', 
	/**
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * logo, it will be saved in logo.url.
	 */
	orion.attribute('image', {
	    label: 'Brand Logo',
	    optional: true
	})
);

orion.dictionary.addDefinition('brandSlogan', 'home', {
	type: String,
	label: 'Brand Slogan',
	optional: true
});


orion.dictionary.addDefinition('mainNumber', 'home', {
	type: String,
	label: 'Main Phone Number'
});

orion.dictionary.addDefinition('faxNumber', 'home', {
	type: String,
	label: 'Fax Number'
});

orion.dictionary.addDefinition('aboutUsTitle', 'home', {
	type: String,
	label: 'About Title',
	optional: true
});

orion.dictionary.addDefinition('aboutUsDesc', 'home', {
	type: String,
	label: 'About Description',
	optional: true
});

orion.dictionary.addDefinition('aboutUsContent', 'home',
  orion.attribute('froala', {
  	label: 'About Us Content',
  	optional: true
  })
);


orion.dictionary.addDefinition('btnLink', 'home', {
	type: String,
	label: 'About Us Button Link',
	optional: true
});

orion.dictionary.addDefinition('btnText', 'home', {
	type: String,
	label: 'About Us Button Text',
	optional: true
});

orion.dictionary.addDefinition('rightSectionTitle', 'home', {
	type: String,
	label: 'Quick Links Title',
	optional: true
});


// orion.dictionary.addDefinition('rightSectionContent', 'home',
//   orion.attribute('froala', {
//   	label: 'Quick Links Content',
//   	optional: true
//   })
// );

orion.dictionary.addDefinition('image', 'home', 

	orion.attribute('image', {
	    label: 'Social Media Share Image (SEO)',
	    optional: true
	})
);

orion.dictionary.addDefinition('title', 'home', {
	type: String,
	label: 'Title of the home (SEO)'
});


orion.dictionary.addDefinition('description', 'home', {
	type: String,
	label: 'Description (SEO)',
	autoform: {
	    afFieldInput: {
	      type: "textarea",
	      rows: 10,
	      class:'materialize-textarea'
	    }
	  }
});

orion.dictionary.addDefinition('favIcon', 'home',
  orion.attribute('image')
);

// orion.dictionary.addDefinition('signUpFormEmail', 'home', {
//   type: String,
//   label: 'Email for the contact us form (footer)',
// });

orion.dictionary.addDefinition('footerTitle', 'home', {
	type: String,
	label: 'Title (Global)'
});

orion.dictionary.addDefinition('googleMaps', 'home', {
	type: String,
	label: 'Google Maps Link (Address)'
});

orion.dictionary.addDefinition('hoursOfOperation', 'home', {
	type: String,
	label: 'Hours of Operation (Global)'
});


orion.dictionary.addDefinition('address', 'home', {
	type: String,
	label: 'Address (Global)'
});

orion.dictionary.addDefinition('city', 'home', {
	type: String,
	label: 'City (Global)'
});

orion.dictionary.addDefinition('state', 'home', {
	type: String,
	label: 'State (Global)'
});

orion.dictionary.addDefinition('zipcode', 'home', {
	type: String,
	label: 'Zipcode (Global)'
});

// orion.dictionary.addDefinition('boilerCopy', 'home', {
// 	type: String,
// 	label: 'Boiler Copy (Footer)'
// });

orion.dictionary.addDefinition('boilerCopy', 'home', {
	type: String,
	label: 'Boiler Copy (Footer)',
	autoform: {
	    afFieldInput: {
	      type: "textarea",
	      rows: 5,
	      class:'materialize-textarea'
	    }
	  }
});

orion.dictionary.addDefinition('copyright', 'home', {
	type: String,
	label: 'Copyright Info (Footer)'
});