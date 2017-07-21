orion.dictionary.addDefinition('title', 'contact', {
  type: String,
  defaultValue: 'Contact Us'
});

orion.dictionary.addDefinition('successMessage', 'contact', {
  type: String,
  defaultValue: 'Thanks!'
});

orion.dictionary.addDefinition('branchTitle', 'contact', {
  type: String,
  defaultValue: 'Branch Title'
});

orion.dictionary.addDefinition('branchBtnLink', 'contact', {
  type: String,
  label: 'Branch Call To Action Button Link'
});

orion.dictionary.addDefinition('branchBtnText', 'contact', {
  type: String,
  label: 'Branch Call To Action Button Text'
});

orion.dictionary.addDefinition('content', 'contact',
  orion.attribute('froala', {
   label: 'Branch Content'
  })
);



// orion.dictionary.addDefinition('image', 'contact',
//   orion.attribute('image')
// );

// orion.dictionary.addDefinition('email', 'contact', {
//   type: String,
//   regEx: SimpleSchema.RegEx.Email,
//   // defaultValue: 'nicolaslopezj@me.com'
// });

// orion.dictionary.addDefinition('text', 'contact',
//   orion.attribute('froala')
// );

// orion.dictionary.addDefinition('text', 'contact',
//   orion.attribute('froala', {
//   	label: 'Content'
//   })
// );