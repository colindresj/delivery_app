App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.HeaderView = App.Views.MainItemView.extend({
    template: 'header/list/header'
  });

});

