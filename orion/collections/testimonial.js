Testimonials = new orion.collection('testimonials', {
  singularName: 'Testimonial',
  pluralName: 'Testimonials',
  title: 'Testimonials',
  link: {
    title: 'Testimonials',
    index: 45
  },
  tabular: {
    columns: [
      //orion.attributeColumn('image', 'image', 'Avatar'),
      { data: 'name', title: 'Client Name' },
      { data: 'position', title: 'Order',
            render: function( val, type, doc) {
              return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-testimonial">'
            }
      },
      // orion.attributeColumn('image', 'beforeImage', 'Before Image'),
      // orion.attributeColumn('image', 'afterImage', 'After Image'),
      { data: 'actions',className: 'text-center',orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.testimonials.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
        tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});
