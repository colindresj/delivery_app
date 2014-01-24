App.module('StaffModule.Edit', function(Edit, App, Backbone, Marionette, $, _){

  Edit.Controller = {
    editStaffer: function(id, staffer){
      staffer = staffer || App.request('staffer:getStaffer', id);
      staffer.on('sync', function(){
        var editView = this.getEditView(staffer);
        App.mainRegion.show(editView);
      }, this);
    },
    getEditView: function(staffer){
      return new Edit.editStafferView({
        model: staffer
      });
    }
  };

});
