App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.HeaderView = App.Views.MainItemView.extend({
    tagName: 'li',
    template: 'header/list/templates/header'
  });

});

