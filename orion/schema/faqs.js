// Faqs.attachSchema(new SimpleSchema({
//   title: {
//     type: String,
//     label: "Title (Question)",
//   },
//   content: orion.attribute('froala', {
//       label: 'Answer',
//       optional: true
//   }),

//   position: {
//     type: Number,
//     label: 'Order',
//     optional: true,
//     autoValue: function(){
//       var pos = this.field('position');

//       if (!pos.isSet) {
//         return 0;
//       }
//     }
//   },

//   createdAt: orion.attribute('createdAt')
// }));