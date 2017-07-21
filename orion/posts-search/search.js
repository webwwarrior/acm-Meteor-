PostsIndex = new EasySearch.Index({
	collection: Posts,
	fields: ['category', 'body'],
	 engine: new EasySearch.Minimongo({
	 sort: function () {
      return { submitted: -1 };
    },
	 //sort: () => ['submitted'],
		selector: function (searchObject, options, aggregation) {
		  let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
		    categoryFilter = options.search.props.categoryFilter;

		  if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
		    selector.category = categoryFilter;
		  }

		  return selector;
		},
		permission: (userId) => {
		    return userHasAccess(userId); // always return true or false here
		  },
		  defaultSearchOptions: {
		    limit: 2 // could also have skip and props
		 }
	 })
});