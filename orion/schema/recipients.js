Recipients.attachSchema(new SimpleSchema({
  
  name: {
    type: String,
    label: "Contact Name",
    max: 50,
    optional: true
  },
  
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },

  position: {
      type: Number,
      label: 'Order',
      optional: true,
      autoValue: function(){
        var pos = this.field('position');

        if (!pos.isSet ){
          return 0;
        }
      }
    }

}));