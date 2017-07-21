Categories = new orion.collection('categories', {
	singularName: 'Category',
	pluralName: 'Categories',
	title: 'Categories',
	link: {
		title: 'Categories',
		parent: 'news',
		index: 10,
	},
	tabular: {
		columns: [
			{ data: 'title', title: 'Category Name' },
			{ data: 'actions',className: 'center-align',orderable: false, title: 'Actions',
	        render: function (val,type,doc){
	          return '<a href="' + Router.path('collections.categories.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
	        },
	      tmpl: Meteor.isClient && Template.actionBtns
	     }
		]
	}
});

Categories.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Category Name'
	},

	createdAt: orion.attribute('createdAt')

 })
);