import Ember from 'ember';

export default Ember.Controller.extend({
  doDelete:undefined,
  actions: {
    foo() {
      alert("test");
    },
    save: function() {
      // save to server
    }
  }
});
