Template.search.onRendered(function(){
  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if($('.preloader').length){
      $('.preloader').delay(200).fadeOut(500);
    }
  }
  
  handlePreloader();
});

Template.search.helpers({
  // searchIndexes: () => [ProductsIndex, StoresIndex],
  // ProductsIndex: () => ProductsIndex,
  // StoresIndex: () => StoresIndex,
  PagesIndex: () => PagesIndex,
  btnAttrs: function() {
    return { class: 'btn' };
  },
  // inputAttrs: function() {
  //   return { type: 'search', id: 'search' };
  // },

  inputAttrs: function () {
    return { 'class': 'form-control', 'placeholder': 'Start searching...', id: 'search' };
  },
  'truncateContent': function(){

      var t = this.content;
      var string = t.substring(0, 600)
      return string + '..';
  },
  btnAttrs: function() {
    return { class: 'btn' };
  },
});

Template.search.events({
  'keyup #search': function(event, template) {
    PagesIndex.getComponentMethods().search(event.currentTarget.value);
    //StoresIndex.getComponentMethods().search(event.currentTarget.value);
  }
});