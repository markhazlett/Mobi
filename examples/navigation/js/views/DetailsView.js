var DetailsView = Mobi.View.extend({
  events: {
    'click .button-prev': 'onClickSomeElement'
  },

  onClickSomeElement: function() {
    Mobi.Navigator.navigate('home',{
      trigger: true,
      animation: {
        type: Mobi.Navigator.animations.SLIDE_STACK,
        direction: Mobi.Navigator.directions.RIGHT
      }
    });
  },

  render: function(){
    this.$el.html('<header class="bar-title"><div class="header-animated"><div class="button-prev">Back</div><h1 class="title">Header</h1></div></header><div class="content"><h1>Welcome to details view</h1></div>');
    return this;
  }
});