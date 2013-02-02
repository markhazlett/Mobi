var AppRouter = Mobi.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'details': 'details'
    },

    home: function(){
      var homeView = new HomeView();
      this.renderView(homeView);
    },

    details: function() {
      var detailsView = new DetailsView();
      this.renderView(detailsView);
    }

});