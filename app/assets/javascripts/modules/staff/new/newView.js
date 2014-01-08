App.module('StaffModule.New', function(New, App, Backbone, Marionette, $, _){

  New.NewStaffView = App.Views.MainItemView.extend({
    tagName: 'form',
    template: 'staff/new/_new-staff',
    triggers: {
      'click #cancel-new': 'hideNewForm'
    }
  });

});
