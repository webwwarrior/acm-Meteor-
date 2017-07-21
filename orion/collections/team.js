Team = new orion.collection('team', {
  singularName: 'Team Member',
  pluralName: 'Team Members',
  title: 'Team Members',
  link: {
    title: 'Team Members',
    index: 50
  },
  tabular: {
    columns: [
      orion.attributeColumn('image', 'image', 'Avatar'),
      { data: 'name', title: 'Name' },
      { data: 'position', title: 'Order',
            render: function( val, type, doc) {
              return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-team">'
            }
      },
      // orion.attributeColumn('image', 'beforeImage', 'Before Image'),
      // orion.attributeColumn('image', 'afterImage', 'After Image'),
      { data: 'actions',className: 'text-center',orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.team.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
        tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});
