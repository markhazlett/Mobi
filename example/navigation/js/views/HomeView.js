var HomeView = Mobi.View.extend({
  events: {
    'click a.button-block': 'onClickSomeElement'
  },

  onClickSomeElement: function() {
    Mobi.Navigator.navigate('details',{
      trigger: true,
      animation: {
        type: Mobi.Navigator.animations.SLIDE_STACK,
        direction: Mobi.Navigator.directions.LEFT
      }
    });
  },

  render: function() {
    this.$el.html('<header class="bar-title"><div class="header-animated"><h1 class="title">Title</h1></div></header><div class="content"><a class="button-block">Block button</a></div>');
    return this;
  }
});