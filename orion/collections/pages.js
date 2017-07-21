var Tabular = null;

if (Package['nicolaslopezj:tabular-materialize']) {
    Tabular = Package['nicolaslopezj:tabular-materialize'].Tabular;
}

if (Package['aldeed:tabular']) {
    Tabular = Package['aldeed:tabular'].Tabular;
}

if (!Tabular) {
  throw new Meteor.Error('orion', 'You must install tabular to use this package');
}

orion.pages.tabular = new Tabular.Table({
  name: 'PagesIndex',
  collection: orion.pages.collection,
  order: [[0, "asc"]],
  columns: [
    // { tmpl: Meteor.isClient && Template.detailsControl },
    // { data: 'privacy', className: 'text-center', orderable: true, title: 'Private',
    //     render: function(val, type, doc) {
    //       var html = '<div class="switch switch-private"><label><input type="checkbox" data-id="' + doc._id + '"' + val;
    //       html +=  (val) ? ' checked="checked"' : ''; 
    //       html +='><span class="lever"></span></label></div>'
    //       return html;
    //     }
    //  },
    { data: 'parentId', title: 'Relationship',
      render: function(val, type, doc ){
        
          if (val){
            return 'Child of ' + val
          } else {
            return '(No Parent)'
          }
        
      }
    },
    { data: 'title', title: i18n('pages.schema.title')},
    { data: 'url', title: i18n('pages.schema.url'), render: function(val, type, doc) { return '<a href="' + RouterLayer.pathFor('page', doc) + '">' + RouterLayer.pathFor('page', doc) + '</a>'; } },
    { data: 'position', title: 'Order',
        render: function( val, type, doc) {
          return '<input data-id="' + doc._id + '" type="number" value="' + val + '" class="order-pages">'
        }
    },

    { data: 'navbar', className: 'text-center', orderable: false, title: 'Navbar',
         render: function(val, type, doc) {
          var html = '<div class="switch switch-navbar"><label><input type="checkbox" data-id="' + doc._id + '"' + val;
          html +=  (val) ? ' checked="checked"' : ''; 
          html +='><span class="lever"></span></label></div>'
          return html;
        }
    },

    { data: 'footer', className: 'text-center', orderable: false, title: 'Footer',
         render: function(val, type, doc) {
          var html = '<div class="switch switch-footer"><label><input type="checkbox" data-id="' + doc._id + '"' + val;
          html +=  (val) ? ' checked="checked"' : ''; 
          html +='><span class="lever"></span></label></div>'
          return html;
        }
    },

    { data: 'actions', className: 'text-center', orderable: false, title: 'Actions',
        render: function (val,type,doc){
          return '<a href="' + Router.path('pages.update', doc) +'" class="btn btn-default btn-xs waves-effect waves-light light-blue accent-4 user-btn-action">Edit</a>'
        },
       tmpl: Meteor.isClient && Template.actionBtns
    }
  ]
});