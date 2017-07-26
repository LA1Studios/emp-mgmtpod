import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var members = Ember.$.getJSON("http://localhost:8080/SearchJson.do");
    return members;
  },
});
