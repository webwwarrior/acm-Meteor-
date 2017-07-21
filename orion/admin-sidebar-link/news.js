if (Meteor.isClient) {
  orion.links.add({
    identifier: 'news',
    title: 'News',
    index: 15,
    activeRouteRegex: 'news'
  });
}
