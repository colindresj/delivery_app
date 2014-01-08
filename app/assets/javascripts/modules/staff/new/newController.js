App.module('StaffModule.New', function(New, App, Backbone, Marionette, $, _){

  New.Controller = {
    newStaff: function(){
      var newView = this.getNewView();
      return newView;
    },
    getNewView: function(){
      return new New.NewStaffView ();
    }
  };

});
