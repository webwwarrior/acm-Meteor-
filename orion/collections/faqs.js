// Faqs = new orion.collection('faqs', {
//   singularName: 'FAQ', // The name of one of these items
//   pluralName: 'FAQs', // The name of more than one of these items
//   title: 'FAQs', // The title in the index of the collection
//   link: {
//     /**
//      * The text that you want to show in the sidebar.
//      * The default value is the name of the collection, so
//      * in this case it is not necessary.
//      */
//     title: 'FAQs',
//     index: 45
//   },
//   /**
//    * Tabular settings for this collection
//    */
//   tabular: {
//     columns: [
//       { data: "title", title: "Title (Question)" },
//       orion.attributeColumn('froala', 'content', 'Answer', { orderable: true }), // makes it searchable
//       { data: 'position', title: 'Order',
//             render: function( val, type, doc) {
//               return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-faqs">'
//             }
//       },
//       orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
//       { data: 'actions',className: 'text-center',orderable: false, title: 'Actions',
//         render: function (val,type,doc){
//           return '<a href="' + Router.path('collections.faqs.update', doc) +'" class="btn btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
//         },
//         tmpl: Meteor.isClient && Template.actionBtns
//      }
//     ]
//   }
// });