var MobiView = Backbone.View.extend({
  el: ".content",
  tagName: "section",
  initialize: function(options) {
    this.options = options;

    if (this.options.title !== undefined) {
      $('h1.title').html(this.options.title);
    }

    if (this.back !== undefined) {
      $('header').prepend('<div class="ios-arrow-left"><a data-href="Home">' + this.back + '</a></div>');
    }

    $('[data-href]').on('click',function() {
      App.Router.navigate( $(this).attr('data-href'), true );
      _.delay(function() { window.scrollTo(0,0); }, 250);
    });   
  },
  header: function () {

  }
});