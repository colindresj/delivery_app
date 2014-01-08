App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Staff = Collections.Main.extend({
    model: App.Models.Staff,
    url: window.Routes.staff_index_path()
  });

  var API = {
    getStaff: function(){
      var staff = new Collections.Staff();
      staff.fetch({
        reset: true
      });
      return staff;
    }
  };

  App.reqres.setHandler('staff:allStaff', function(){
    return API.getStaff();
  });

});
