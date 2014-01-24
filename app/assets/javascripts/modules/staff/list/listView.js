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
    template: 'staff/list/_actions',
    triggers: {
      'click #new-staff': 'loadNewForm'
    }
  });

  List.StafferView = App.Views.MainItemView.extend({
    className: 'row staff-member',
    template: 'staff/list/_each',
    events: {
      'click': 'showStaffer'
    },
    showStaffer: function(){
      this.trigger('staff:clicked', this.model);
    }
  });

  List.Empty = App.Views.MainItemView.extend({
    tagName: 'section',
    template: 'staff/list/_empty'
  });

  List.StaffIndexView = App.Views.MainCompositeView.extend({
    template: 'staff/list/_index',
    itemView: List.StafferView,
    itemViewContainer: '#staffers',
    emptyView: List.Empty
  });

});
