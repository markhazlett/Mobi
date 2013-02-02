window.Mobi.Router = Backbone.Router.extend({
  renderView: function(view) {
    return Mobi.Navigator.renderView($('#app-main'), view);
  }
});