Template.socialShareBasic.helpers({
    opts: function() {
      var currentRoute = "http://www.acmix.com/news-articles/" + Router.current().params._id;
      
      var opts ={
        email: true,
        facebook: true,
        facebookMessage: true,
        gmail: true,
        //googlePlus: true,
        linkedIn: true,
        //pinterest: true,
        sms: true,
        twitter: true,
        // url: true,
        shareData: {
          url: currentRoute,
          facebookAppId: '195380783916970',
          subject: "Check out this article",
          body: "I'd like to share this article with you",
          redirectUrl: currentRoute
        }
      };
      return opts;
    },
    opts2: function() {
      var opts ={
        facebook: true,
        pinterest: false,
        twitter: true,
        shareData: {
          url: 'http://yahoo.com'
        },
        buttonHtml: {
          twitter: 'Twitter'
        }
      };
      return opts;
    }
  });



