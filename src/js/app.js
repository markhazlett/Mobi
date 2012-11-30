window.App = window.App || {
  Views: {},

  placeAnchorHooks : function() {
    $('[data-href]').on('click',function() {
      App.router.navigate( $(this).attr('data-href'), true );
      _.delay(function() { window.scrollTo(0,0); }, 250);
    });
  }
};

$(document).ready(function() {
  App.router = new App.Router();
  Backbone.history.start({ pushState: false });

  App.placeAnchorHooks();

  setTimeout(function() { window.scrollTo(0, 0); }, 1000);
  $(window).bind('orientationchange', function() { scrollTo(0, 0); });
});