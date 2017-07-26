import Ember from 'ember';

export default Ember.Controller.extend({
  isVisible:false,
  postVisible:true,
  trial:true,
  currentId:'',
  currentEid:'',
  currentEname:'',
  currentEdept:'',
  model: null,
  delDbid: [],
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


        var self=this;
        self._super.apply(this, arguments);
        this.transitionToRoute('view');
        this.set('isVisible', false);

        return Ember.$.getJSON("http://localhost:8080/SearchJson.do"). then(function(model){
          self.set('model',model);
        });

      },
      showModal: function(id, eid, ename, edept){

          this.set('isVisible',false);
        //  alert("here god");
        this.set('isVisible',true);
        this.set('currentId', id);
        this.set('currentEid', eid);
        this.set('currentEname', ename);
        this.set('currentEdept', edept);
      },
      onModalClose: function(){
      //  alert("Reached here");
        this.set('isVisible',false);
      },
      updateChecked: function(id){
        if(!this.get('delDbid').includes(id))
          this.get('delDbid').pushObject(id);
        else
          this.get('delDbid').removeObject(id);
      },
      delChecked: function(){
        var x=this.get('delDbid');
        var i=0;
        if(x!=null){
          for(i=0; i< x.length; i++){
            Ember.$.ajax({
              type: "POST",
              url: "http://localhost:8080/DeleteBulk.do?dbid=" + x[i],
              data: {"username": "tomcat","password":"se3ret" }
            });
          }
        }
        var self=this;
        self._super.apply(this, arguments);
        this.transitionToRoute('view');
        return Ember.$.getJSON("http://localhost:8080/SearchJson.do"). then(function(model){
          self.set('model',model);
        });
      },

    }
  });
