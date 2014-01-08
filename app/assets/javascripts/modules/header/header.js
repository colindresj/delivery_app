App.module('HeaderModule', function(HeaderModule, App, Backbone, Marionette, $, _){

  HeaderModule.startWithParent = false;

  var API = {
    listHeader: function(){
      HeaderModule.List.Controller.listHeader();
    }
  };

  HeaderModule.on('start', function(){
    API.listHeader();
  });

});
