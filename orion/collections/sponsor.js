Sponsors = new orion.collection('sponsors', {
  singularName: 'Partners',
  pluralName: 'Partners',
  title: 'Partners',
  link: {
    title: 'Partners',
    index: 72,
  }, 
  
  /**
   * Tabular settings for this collection
   */

  tabular: {
    columns: [
      // { data: 'title', title: 'Title' },
      orion.attributeColumn('image', 'image', 'Sponsor Image(width: 196px, height: 45px)'),
      // { data: 'website', title: 'Website',
      //       render: function(val, type, doc){
      //         return '<a href=" ' + val + ' " target="_BLANK">' + val + '</a>'
      //       }
      //    },
         { data: 'actions',className: 'text-center',orderable: false, title: 'Actions',
          render: function (val,type,doc){
            return '<a href="' + Router.path('collections.sponsors.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
          },
          tmpl: Meteor.isClient && Template.actionBtns
         }
    ]
  }
});
