import Ember from 'ember';

export default Ember.Route.extend({
  model(){
     dataid: this.store.find('dataid')
  },
});
