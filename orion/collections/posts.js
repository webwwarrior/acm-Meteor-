/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields
 * we will show in the index of the collection in the admin
 */
Posts = new orion.collection('posts', {
  singularName: 'News Article', // The name of one of this items
  pluralName: 'News Articles', // The name of more than one of this items
  title: 'News Articles', // The title of the page
  link: {
     
    title: 'News Articles',
    parent: 'news'
    // parent: 'dictionary-update'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'image', 'Image'),
      orion.attributeColumn('froala', 'body', 'Preview'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
      {
        data: "submitted",
        title: "Submitted",
        render: function (val, type, doc) {
          return moment(val).format('MMMM DD YYYY,' + '<br>' + 'h:mm a');
        }
      },
      //orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      { data: 'actions',className: 'text-center',orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.posts.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
        tmpl: Meteor.isClient && Template.actionBtns
       }
    ]
  }
});