App.module('StaffModule.List', function(List, App, Backbone, Marionette, $, _){

  List.LayoutView = App.Views.MainLayout.extend({
    id: 'staff-list',
    template: 'staff/list/layout',
    regions: {
      titleRegion: '#title-region',
      actionsRegion: '#actions-region',
      newStaffRegion: '#new-staff-region',
      staffIndexRegion: '#staff-index-region'
    }
  });

  List.TitleView = App.Views.MainItemView.extend({
    template: 'staff/list/_title'
  });

  List.ActionsView = App.Views.MainItemView.extend({
    template: 'staff/list/_actions'
  });

  List.NewStaffView = App.Views.MainItemView.extend({
    tagName: 'form',
    template: 'staff/list/_new-staff'
  });

  List.StaffIndexView = App.Views.MainItemView.extend({
    template: 'staff/list/_index'
  });

});
