App.module('Models', function(Models, App, Backbone, Marionette, $, _){

    Models.Staff = Models.Main.extend({
      urlRoot: window.Routes.staff_index_path()
    });

    var API = {
    getStaffer: function(id){
      var staffer = new Models.Staff({id: id});
      staffer.fetch();
      return staffer;
    }
  };

  App.reqres.setHandler('staffer:getStaffer', function(id){
    return API.getStaffer(id);
  });

});
