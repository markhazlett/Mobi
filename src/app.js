App = {
  placeAnchorHooks : function() {
    $('[data-href]').on('click',function() {
      App.Router.navigate( $(this).attr('data-href'), true );
      _.delay(function() { window.scrollTo(0,0); }, 250);
    });
  }
};

$(document).ready(function() {    
  App.Router = new Router;
  Backbone.history.start({ pushState: true });
  
  App.placeAnchorHooks();

  setTimeout(function() { window.scrollTo(0, 0); }, 1000);
  $(window).bind('orientationchange', function() { scrollTo(0, 0); });
});