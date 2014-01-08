App.module('StaffModule', function(StaffModule, App, Backbone, Marionette, $, _){

  StaffModule.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'staff': 'listStaff'
    }
  });

  var API = {
    listStaff: function(){
      StaffModule.List.Controller.listStaff();
    }
  };

  App.addInitializer(function(){
    return new StaffModule.Router({
      controller: API
    });
  });

});
