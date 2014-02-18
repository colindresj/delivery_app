App.module('Views', function(Views, App, Backbone, Marionette, $, _){

  // extending Marionette's prototype in order to add a currentUser template helper
  // which allows us to constantly have the model's attributes exposed to all views
  _.extend(Marionette.View.prototype, {
    templateHelpers: function(){
      return {
        // currentUser: App.request('get:currentUser').toJSON(),
        linkTo: function(name, url, options){
          options = options || {};

          _.defaults(options, {
            internal: true
          });

          // appending the # to the link when an internal link
          if (options.internal) url = '#' + url;

          return '<a href="' + url + '">' + name + '</a>';
        }
      };
    },
    setInstancePropertiesFor: function(){
      var args, _picked, key, val;

      // converting the arguments object into a real array
      args = arguments.length >= 1 ? Array.prototype.slice.call(arguments, 0) : [];

      // pick out the options that should be set as instance properties
      _picked = _.pick(this.options, args);

      for (key in _picked) {
        val = _picked[key];
        this[key] = val;
      }
    }
  });

});
