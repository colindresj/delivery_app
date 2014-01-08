App.module('Views', function(Views, App, Backbone, Marionette, $, _){

  Views.MainCollectionView = Backbone.Marionette.CollectionView.extend({
    itemViewEventPrefix: 'childView'
  });

});
