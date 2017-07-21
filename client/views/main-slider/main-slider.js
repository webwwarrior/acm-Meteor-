Template.mainSlider.onCreated(function(){
  this.subscribe('banners');
});


Template.mainSlider.onRendered(function(){

   var self = this;

  self.autorun(function() {
    if (!Template.instance().subscriptionsReady()) return;
        self.$('.item').first().addClass('active');

        self.$('.carousel').carousel({
          interval: 3000,
          singleItem : true,
          transitionStyle : "fade"
        }); 

  });      
});

Template.mainSlider.helpers({
  'slide':function(){
    return RotatingBanner.find({visibility: true}, { sort: { position: 1  } });
  },

  'ifEqualsTrue':function(){
    return this.openInNewTab === true
  }
});

// Template.mainSlider.helpers({
//   'firstSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.firtSlideOpenInNewTab') === true
//   },
//   'secondSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.secondSlideOpenInNewTab') === true
//   },
//   'thirdSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.thirdSlideOpenInNewTab') === true
//   },
//   'fourthSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.fourthSlideOpenInNewTab') === true
//   },
//   'fiveSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.fiveSlideOpenInNewTab') === true
//   },
//   'sixSlideEqualsTrue':function(){
//   	return orion.dictionary.get('hero-slider.sixSlideOpenInNewTab') === true
//   },
// });