App.module('FooterModule', function(FooterModule, App, Backbone, Marionette, $, _){

  var API = {
    showFooter: function(){
      FooterModule.Show.Controller.showFooter();
    }
  };

  FooterModule.on('start', function(){
    API.showFooter();
  });

});
