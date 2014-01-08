App.module('HeaderModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listHeader: function(){
      // var links = App.request('header:links');
      var headerView = this.getHeaderListView();

      App.headerRegion.show(headerView);
    },
    getHeaderListView: function(){
      return new List.HeaderView();
    }
  };

});
