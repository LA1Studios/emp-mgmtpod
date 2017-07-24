import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var members = Ember.$.getJSON("http://localhost:8080/SearchJson.do");
    return members;
  },
  actions: {
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
