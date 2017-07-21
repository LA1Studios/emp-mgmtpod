import Ember from 'ember';

export default Ember.Controller.extend({
  doDelete:undefined,
  watchFoo: function(){
    console.log('foo changed');
  }.observes('doDelete')
});
