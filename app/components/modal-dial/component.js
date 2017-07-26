import Ember from 'ember';

export default Ember.Component.extend({
  closeDial1: false,

  show: function() {
if(this.get('showModal1'))
{
  //alert("it's true now");
    $('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('closeDial');
      $('.modal').modal('hide');
    //  alert("but quite here??");
    }.bind(this));
  }
}.on('willRender'),

    showModalObserver : Ember.observer('showModal1', function(){

    if(this.get('showModal1'))
      $('.modal').modal('show');
    else
      $('.modal').modal('hide');

  }).on('didUpdateAttrs'),


  });
