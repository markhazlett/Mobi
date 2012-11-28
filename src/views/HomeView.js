var HomeView = MobiView.extend({
  initialize: function(options) {
    this.title = 'Home';

    HomeView.__super__.constructor(this, options);
  },

  render: function() {    
    $(this.el).html('<section id="home"><h1>Home</h1><a data-transition="slide-in" data-href="Next">Next</a></section>');
    return this;
  }
});
