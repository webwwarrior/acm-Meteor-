RotatingBanner = new orion.collection('rotatingbanner', {
	singularName: 'Banner',
	pluralName: 'Banners',
	title: 'Rotating Banner',
	link: {
		title: 'Rotating Banner',
    index: 20
		//parent: 'slideshows'
	},
	tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      orion.attributeColumn('image', 'image', 'Image (size: 2000 x 900)'),
      { data: 'position', title: 'Order', 
        render: function(val,type,doc){
        return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-banner">'
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
	          return '<a href="' + Router.path('collections.rotatingbanner.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
	        },
	        tmpl: Meteor.isClient && Template.actionBtns
	   }
    ]
  }
});