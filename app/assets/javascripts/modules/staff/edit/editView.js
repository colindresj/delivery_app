App.module('StaffModule.Edit', function(Edit, App, Backbone, Marionette, $, _){

  Edit.editStafferLayout = App.Views.MainLayout.extend({
    template: 'staff/edit/edit-staffer-layout',
    regions: {
      formRegion: '#form-region'
    }
  });

  Edit.editStafferView = App.Views.MainItemView.extend({
    template: 'staff/edit/edit-staffer',
    formSettings: {
      footer: true,
      focusFirst: false
    }
  });

});
