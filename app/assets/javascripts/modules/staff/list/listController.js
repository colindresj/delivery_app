App.module('StaffModule.List', function(List, App, Backbone, Marionette, $, _){

  List.Controller = {
    listStaff: function(){
      var staffCollection = App.request('staff:allStaff');
      this.layoutView = this.getLayoutView();

      // instantiating all the subregions only when the layoutView is shown
      this.layoutView.on('show', function(){
        this.titleRegion();
        this.actionsRegion();
        this.staffIndexRegion(staffCollection);
      }, this);

      App.mainRegion.show(this.layoutView);
    },

    // Layout View
    getLayoutView: function(){
      return new List.LayoutView();
    },

    // Title View
    titleRegion: function(){
      var titleView = this.getTitleView();
      this.layoutView.titleRegion.show(titleView);
    },
    getTitleView: function(){
      return new List.TitleView();
    },

    // Actions View
    actionsRegion: function(){
      var actionsView = this.getActionsView();

      actionsView.on('loadNewForm', function(){
        this.newStaffRegion();
      }, this);

      this.layoutView.actionsRegion.show(actionsView);
    },
    getActionsView: function(){
      return new List.ActionsView();
    },

    // New Staff View
    newStaffRegion: function(){
      var newStaffView = App.request('new:staff:view');
      var newStaffRegion = this.layoutView.newStaffRegion;

      newStaffView.on('hideNewForm', function(){
        newStaffRegion.close();
      }, this);

      newStaffRegion.show(newStaffView);
    },

    // Index View
    staffIndexRegion: function(collection){
      var indexView = this.getStaffIndexView(collection);

      indexView.on('childView:staff:clicked', function(childView, staffer){
        App.vent.trigger('staff:clicked', staffer);
      });

      this.layoutView.staffIndexRegion.show(indexView);
    },
    getStaffIndexView: function(collection){
      return new List.StaffIndexView({
        collection: collection
      });
    }
  };

});
