import Ember from 'ember';

export default Ember.Controller.extend({
  searchrec: null,
  vehicle: null,
  vehicles: Ember.String.w('Tesla Chrysler Toyota'),
  actions: {
    selectVehicle(vehicle) {
      this.set('vehicle', vehicle);
    },
    searchEmpRec() {
      var self=this;
      self._super.apply(this, arguments);
      return Ember.$.getJSON("http://localhost:8080/Search.do?filter1="+this.get('eName')+"&filter2="+this.get('eDept')+"&sertype=contains&sermode=and").
      then(function(searchrec){
        self.set('searchrec',searchrec);
      });
  }
}
});
