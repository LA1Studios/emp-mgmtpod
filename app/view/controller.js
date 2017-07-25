import Ember from 'ember';

export default Ember.Controller.extend({
  isVisible:false,
  currentId:'',
  actions: {
      editEmpRec:function(idData) {
        const eid = this.get('eId');
        const ename = this.get('eName');
        const edept = this.get('eDept');
        Ember.$.ajax({
          type: "POST",
          url: "http://localhost:8080/editEmp.do?empId=" + eid + "&empName=" + ename + "&empDept="+edept+"&dataId="+idData,
          data: {"username": "tomcat","password":"se3ret" }
        });
        this.transitionToRoute('view');
      },
      showModal(id, eid, ename, edept){
        this.toggleProperty('isVisible');
        this.set('currentId', id)
      }
    }
  });
