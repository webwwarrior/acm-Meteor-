
orion.dictionary.addDefinition('teamTitle', 'home(section titles)', {
	type: String,
	label: 'Team Members Title',
	optional: true
});

orion.dictionary.addDefinition('teamSubTitle', 'home(section titles)', {
	type: String,
	label: 'Team Members Sub Title',
	optional: true
});

orion.dictionary.addDefinition('blogTitle', 'home(section titles)', {
	type: String,
	label: 'Blog Title',
	optional: true
});

orion.dictionary.addDefinition('blogSubTitle', 'home(section titles)', {
	type: String,
	label: 'Blog Sub Title',
	optional: true,
	autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 5,
        class:'materialize-textarea'
      }
    }
});


orion.dictionary.addDefinition('sponsorsTitle', 'home(section titles)', {
	type: String,
	label: 'Partners Title',
	optional: true
});

orion.dictionary.addDefinition('sponsorsSubTitle', 'home(section titles)', {
	type: String,
	label: 'Partners Sub Title',
	optional: true
});


// orion.dictionary.addDefinition('testimonialsTitle', 'home(section titles)', {
// 	type: String,
// 	label: 'Testimonials Title',
// 	optional: true
// });

// orion.dictionary.addDefinition('testimonialsSubTitle', 'home(section titles)', {
// 	type: String,
// 	label: 'Testimonials Sub Title',
// 	optional: true
// });

// orion.dictionary.addDefinition('testimonialsContent', 'home(section titles)', {
// 	type: String,
// 	label: 'Testimonials Content',
// 	optional: true,
// 	autoform: {
//       afFieldInput: {
//         type: "textarea",
//         rows: 5,
//         class:'materialize-textarea'
//       }
//     }
// });


orion.dictionary.addDefinition('homePageDividerTitle', 'home(section titles)', {
	type: String,
	label: 'Home Page Divider Title',
	optional: true
});


orion.dictionary.addDefinition('homePageMeBtnLink', 'home(section titles)', {
	type: String,
	label: 'Home Page Divider Button Link',
	optional: true
});

orion.dictionary.addDefinition('homePageBtnText', 'home(section titles)', {
	type: String,
	label: 'Home Page Divider Button Text',
	optional: true
});

orion.dictionary.addDefinition('subscribeTitle', 'home(section titles)', {
	type: String,
	label: 'Subscribe Title',
	optional: true
});

orion.dictionary.addDefinition('subscribeSubTitle', 'home(section titles)', {
	type: String,
	label: 'Subscribe Sub Title',
	optional: true
});
