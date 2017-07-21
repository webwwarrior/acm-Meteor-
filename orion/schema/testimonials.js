Testimonials.attachSchema(new SimpleSchema({
  // image: orion.attribute('image', {
  //     label: "Avatar ( Leave blank IF client didn't provide a face picture )",
  //     optional: true
  // }),
  name: {
    type: String,
    label: 'Client Name'
  },
  occupation: {
    type: String,
    label: 'Client occupation ( Leave Blank IF client didn"t provide an occupation )',
    optional: true
  },
  content: {
    type: String,
    label: 'Quote',
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 20,
        class:'materialize-textarea'
      }
    }
  },
  
  position: {
    type: Number,
    label: 'Order',
    optional: true,
    autoValue: function(){
      var pos = this.field('position');

      if (!pos.isSet) {
        return 0;
      }
    }
  },
  createdAt: orion.attribute('createdAt')
}));