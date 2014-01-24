App.module('StaffModule.Edit', function(Edit, App, Backbone, Marionette, $, _){

  Edit.Controller = {
    editStaffer: function(id, staffer){
      staffer = staffer || App.request('staffer:getStaffer', id);
      var _this = this;

      App.execute('when:fetched', staffer, function(){
        var editView = _this.getEditView(staffer);
        App.mainRegion.show(editView);
      });

    },
    getEditView: function(staffer){
      return new Edit.editStafferView({
        model: staffer
      });
    }
  };

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
