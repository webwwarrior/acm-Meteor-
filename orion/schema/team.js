Team.attachSchema(new SimpleSchema({
  image: orion.attribute('image', {
      label: "Avatar",
      optional: true
  }),

  name: {
    type: String,
    label: 'Name'
  },

  occupation: {
    type: String,
    label: 'Occupation',
    optional: true
  },

  content: orion.attribute('froala', {
      label: 'Description'
  }),

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