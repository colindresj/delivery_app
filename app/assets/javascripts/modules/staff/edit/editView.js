App.module('StaffModule.Edit', function(Edit, App, Backbone, Marionette, $, _){

  Edit.editStafferView = App.Views.MainItemView.extend({
    template: 'staff/edit/edit-staffer',
    modelEvents: {
      'sync':  'render'
    }
  });

});
