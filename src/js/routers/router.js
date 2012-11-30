window.App = window.App || { Views: {} };

window.App.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "/": "home",
    ":id": "page",
    "/:id": "page"
  },
  hideAll: function() {
    return $(".content > section").removeClass("current");
  },

  notFound: function() {
    return $("#not-found").addClass("current");
  },

  home: function() {
    this.hideAll();

    App.homeView = new App.Views.HomeView();
    App.homeView.render();

    $('#home').addClass("current");
  },

  page: function(id) {
    this.hideAll();

    App.view = new App.Views[id + "View"]({id: id});
    App.view.render();

    return $("#" + id).addClass("current");
  }
});
