window.Mobi = window.Mobi || {};

window.Mobi.View = Backbone.View.extend({
  delegateEvents: function(events) {
    var key, newKey, oldValue;
    this.events = this.events || events;
    for (key in this.events) {
      if (key.indexOf('click') === 0) {
        if (Modernizr.touch) {
          newKey = key.replace('click', 'touchend');
          oldValue = this.events[key];
          this.events[newKey] = oldValue;
          delete this.events[key];
        }
      }
    }
    return Backbone.View.prototype.delegateEvents.call(this, this.events);
  }
});