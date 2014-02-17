App.module('StaffModule.Edit', function(Edit, App, Backbone, Marionette, $, _){

  Edit.Controller = {
    editStaffer: function(id, staffer){
      staffer = staffer || App.request('staffer:getStaffer', id);
      var _this = this;

      App.execute('when:fetched', staffer, function(){
        _this.layout = _this.getLayoutView(staffer);

        _this.layout.on('show', function(){
          _this.showFormRegion(staffer);
        });

        App.mainRegion.show(_this.layout);
      });

    },
    getLayoutView: function(staffer) {
      return new Edit.editStafferLayout({
        model: staffer
      });
    },
    showFormRegion: function(staffer){
      var editStafferView = this.getEditView(staffer),
          formView = App.request('form:wrapper', editStafferView);

      this.layout.formRegion.show(formView);
    },
    getEditView: function(staffer){
      return new Edit.editStafferView({
        model: staffer
      });
    }
  };

});
