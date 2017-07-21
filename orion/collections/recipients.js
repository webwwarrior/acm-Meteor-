Recipients = new orion.collection('recipient', {
  singularName: 'recipient', // The name of one of this items
  pluralName: 'recipients', // The name of more than one of this items
  title:'Recipient', // The title of the page
  link: {
    title: 'Recipients', index: 75
    
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Contact Name' },
      { data: 'email', title: 'Email' },
      { data: 'position', title: 'Order', 
        render: function(val,type,doc){
        return '<input data-id="' + doc._id + '" type="number" value="' + val +'" class="order-recipients">'
        }
      },

      { data: 'visibility',className: 'text-center', orderable: false, title: 'Visibility', 
        render: function(val, type, doc) {
          var html = '<div class="switch switch-rotating-banner"><label><input type="checkbox" data-id="' + doc._id + '"';
          html +=  (val) ? ' checked="checked"' : ''; 
          html +='><span class="lever"></span></label></div>'
          return html;
        }

      },
      
      { data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('collections.recipient.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
        tmpl: Meteor.isClient && Template.actionBtns
     }
    ]
  }
});