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

});
