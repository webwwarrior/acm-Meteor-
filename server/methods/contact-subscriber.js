function nl2br(str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

String.prototype.escape = function() {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  return nl2br(this.replace(/[&<>]/g, function(tag) {
    return tagsToReplace[tag] || tag;
  }));
};

Meteor.methods({
  contactFormMethod: function(doc) {
    check(doc, ContactFromFooter);
    
    var html = '<b>Email: ' + doc.useremail + '</b><br><br>';


    Meteor.defer(function() {
      Email.send({
        to: doc.useremail,
        from: `ACM <${orion.dictionary.get('global(emails).newsletterRecipient')}>`,
        subject: 'Newsletter subscriber contact',
        replyTo: doc.useremail,
        html: html
      });
    });
  },
});
