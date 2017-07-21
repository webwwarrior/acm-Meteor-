Template.contact.onCreated(function(){
  this.subscribe('recipients');
  this.subscribe('branches');
});

Template.contact.onRendered(function(){

});

Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6Lemdx8TAAAAACz-UXGfvLfn6kBWSYZMtiUpMDGY'
    });
});

AutoForm.addHooks('contactForm', {
 
  onSubmit:   function(insertDoc, updateDoc, currentDoc){

     var self = this;
     
      //get the captcha data
      var recaptchaResponse = grecaptcha.getResponse();

      Meteor.call('verifyAndSendContact', recaptchaResponse, insertDoc, function(error, result) {
            
            if (error) {
              Session.set('errorMsg', error.reason);
            } else {
              grecaptcha.reset();
              Session.set('errorMsg', false)
              self.done();
            }
          }); 

      return false;

  },

  onSuccess: function(formType, result) {
   // Session.set('emailSent', true)
   // Materialize.toast(orion.dictionary.get('contact.successMessage'), 3000,  'alert-color')
   //sAlert.success(orion.dictionary.get('contact.successMessage'), {effect: 'genie', position: 'top-right', timeout: 5000, onRouteClose: true, stack: false, offset: '80px'});
  Bert.alert( orion.dictionary.get('contact.successMessage'), "success" );
  },
});

Template.contact.helpers({
  getCaptchaErrors: function(){
    return Session.get('errorMsg');
  },

  branch: function(){
    return Branches.find();
  }
})