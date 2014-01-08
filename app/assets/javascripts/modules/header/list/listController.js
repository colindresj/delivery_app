App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listHeader: function(){
      var headerView = this.getHeaderView();
      App.headerRegion.show(headerView);
    },
    getHeaderView: function(){
      return new List.HeaderView();
    }
  };

});
