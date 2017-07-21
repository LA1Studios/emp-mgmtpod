import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addEmpRec() {
      const eid = this.get('eId');
      const ename = this.get('eName');
      const edept = this.get('eDept');
      Ember.$.ajax({
        type: "POST",
        url: "http://localhost:8080/addEmp.do?empId=" + eid + "&empName=" + ename + "&empDept="+edept,
        data: {"username": "tomcat","password":"se3ret" }
      });
      this.transitionToRoute('view');
    }
  }
});
