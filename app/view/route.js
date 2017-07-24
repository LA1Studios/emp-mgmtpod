import Ember from 'ember';

export default Ember.Route.extend({
  editId: '',
  model(){
    var members = Ember.$.getJSON("http://localhost:8080/SearchJson.do");
    return members;
  },
  actions: {
    showModal: function(name, model, dataid) {
      this.set('editId', dataid),
      this.render(name, {
        outlet: 'modal',
        dataid: dataid,
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
