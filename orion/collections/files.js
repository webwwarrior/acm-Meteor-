Files = new orion.collection('files', {
  singularName: 'Document', // The name of one of these items
  pluralName: 'Documents', // The name of more than one of these items
  title: 'Documents', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Documents'
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('file', 'image', 'Doc URL'),
      { data: 'actions',className: 'text-center', orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.files.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>  '
        },
        tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});

Files.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  image: orion.attribute('file', {
    label: 'File',
    optional: true
  })
}));