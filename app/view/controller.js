import Ember from 'ember';

export default Ember.Controller.extend({
  isCentered: false,
  actions : {
    centerMap : function () {
      alert('triggered')
      this.trigger('recenter');
    }
  }
});
