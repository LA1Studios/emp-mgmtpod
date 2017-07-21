import DS from 'ember-data';

export default DS.Model.extend({
  eid: DS.attr('number'),
  ename: DS.attr('string'),
  edept: DS.attr('string')
});
