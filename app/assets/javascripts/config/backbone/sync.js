(function(Backbone){
  var originalSync = Backbone.sync;
  Backbone.sync = function(method, entity, options){
    options = options || {};

    // grab the xhr promise returned from Backbone.sync
    var promise = originalSync(method, entity, options);

    // check if the entity is missing the private _fetch property and
    // method is 'read', then create ._fetch and set it to the promise
    if (!entity._fetch && method === 'read') entity._fetch = promise;
  };
})(Backbone);
