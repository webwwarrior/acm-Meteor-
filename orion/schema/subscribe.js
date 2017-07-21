ContactFromFooter = new SimpleSchema({
  // username: {
  // 	type: String
  // },

  useremail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  }
});
