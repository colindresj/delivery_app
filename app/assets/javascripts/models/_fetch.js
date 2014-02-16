App.module('Models', function(Models, App, Backbone, Marionette, $, _){
  App.commands.setHandler('when:fetched', function(entities, callback){

    // wrap entities in an empty array, then call flatten to produce a single array
    // which allows for passing in both a regular entity and an array of entities
    // then pluck out all the _fetch properties from each object in the array
    // and return it using .value() which is the resolve for _.chain()
    var deferreds = _.chain([entities]).flatten().pluck('_fetch').value();
    $.when.apply($, deferreds).done(function(){
      return callback();
    });

  });
});
