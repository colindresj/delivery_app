App.module('StaffModule', function(StaffModule, App, Backbone, Marionette, $, _){

  StaffModule.Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'staff': 'listStaff'
    }
  });

  var API = {
    listStaff: function(){
      StaffModule.List.Controller.listStaff();
    },
    newStaff: function(){
      return StaffModule.New.Controller.newStaff();
    }
  };

  App.addInitializer(function(){
    return new StaffModule.Router({
      controller: API
    });
  });

  App.reqres.setHandler('new:staff:view', function(){
    return API.newStaff();
  });

});
