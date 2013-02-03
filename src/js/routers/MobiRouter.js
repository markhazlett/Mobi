window.Mobi = window.Mobi || {};

window.Mobi.Router = Backbone.Router.extend({
  renderView: function(view) {
    return window.Mobi.Navigator.renderView($('#app-main'), view);
  }
});