Boxes = new orion.collection('boxes', {
  singularName: 'Box',
  pluralName: 'Boxes',
  title: 'Boxes',
  link: {
    title: 'Boxes',
    index: 35
  },

  tabular: {
    columns: [
      { data: 'title', title: 'Title'},
      { data: 'position', title: 'Order',
            render: function( val, type, doc) {
              return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-box">'
            }
        },

        { data: 'visibilityHome', className: 'text-center', orderable: false, title: 'Visibility Home Page',
             render: function(val, type, doc) {
              var html = '<div class="switch switch-box"><label><input type="checkbox" data-id="' + doc._id + '"' + val;
              html +=  (val) ? ' checked="checked"' : ''; 
              html +='><span class="lever"></span></label></div>'
              return html;
            }
        },

        // { data: 'visibility',className: 'center-align', orderable: false, title: 'Visibility', 
        //     render: function(val, type, doc) {
        //       var html = '<div class="switch switch-boxes"><label>Off<input type="checkbox" data-id="' + doc._id + '"';
        //       html +=  (val) ? ' checked="checked"' : ''; 
        //       html +='><span class="lever"></span>On</label></div>'
        //       return html;
        //     }

        // },


      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
          render: function (val,type,doc){
            return '<a href="' + Router.path('collections.boxes.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
          },
        tmpl: Meteor.isClient && Template.actionBtns
       }
    ]
  }
});