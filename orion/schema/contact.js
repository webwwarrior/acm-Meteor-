ContactSchema = new SimpleSchema({
  categoryId: {
    type: String,
    label: "Recipients",
    autoform: {
      options: function() {
        return Recipients.find({}, {sort: { position: 1 }}).map(function(rec) { 
              return { label: rec.name, value: rec.email }; 
            });
      }
     }
  },

  name : {
    type: String,
    max: 50
  },

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },

  phone: {
    type: String,
    optional: true
  },
  
  message: {
    type: String,
    max: 1000
  }
});