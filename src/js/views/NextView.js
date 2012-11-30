var NextView = MobiView.extend({
  initialize: function(options) {
    this.title = 'Next';
    this.back = 'Home';

    NextView.__super__.constructor(this, options);
  },

  render: function() {    
    $(this.el).html('<section id="Next"><h1>Next</h1></section>');
    return this;
  }
});