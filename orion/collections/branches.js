Branches = new orion.collection('branches', {
  singularName: 'Branch',
  pluralName: 'Branches',
  title: 'Branches',
  link: {
    title: 'Branches',
    index: 40
  },

  tabular: {
    columns: [
      { data: 'name', title: 'Name'},

      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
          render: function (val,type,doc){
            return '<a href="' + Router.path('collections.branches.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
          },
        tmpl: Meteor.isClient && Template.actionBtns
       }
    ]
  }
});