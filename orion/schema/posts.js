
/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title' // We use this function to make i18n work in autoform
  },

  subTitle: {
    type: String,
    optional: true,
    label: 'Sub Title' // We use this function to make i18n work in autoform
  },

  category: {
    type: [String],
    label: "Select Category",
    optional: true,
    autoform: {
      type: "select-checkbox",
      options: function() {
          return Categories.find().map(function(category) { 
            return { 
              label: category.title, value: category.title 
            }; 
          });
      }
    }
  },

  /**
   * The file attribute is a custom orion attribute
   * This is where orion do the magic. Just set
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('file', {
      label: 'Image', // We use this function to make i18n work in autoform
      optional: true
  }),

  submitted: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  },
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
  body: orion.attribute('froala', {
      label: 'Content' // We use this function to make i18n work in autoform
  }),

  /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */

   createdBy: {
        type: String,
        optional: true,
        autoValue: function() {
          var currentUser = Meteor.userId();
          var userObj = Meteor.users.findOne(currentUser);
          if (currentUser){      
            return userObj.profile.name;
          } 
        },
        autoform: {
          omit: true
        }
  },
  //createdBy: orion.attribute('createdBy'),
  //createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the posts
 * collection to easily get the user
 */

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});