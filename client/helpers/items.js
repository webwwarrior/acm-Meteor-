Template.registerHelper('formatDate', function(date) {
  return moment(date).format('dddd MMMM DD YYYY');
});

Template.registerHelper('formatDatePosts', function(date) {
  return moment(date).format('MMMM DD, YYYY');
});

Template.registerHelper('formatDateSinglepostSide', function(date) {
  return moment(date).format('MM/DD/YYYY');
});

Template.registerHelper('formatTime', function(date) {
  return moment(date).format('h:mm a');
});