App.module('Components.Form', function(Form, App, Backbone, Marionette, $, _){

  Form.formWrapper = App.Views.MainLayout.extend({
    template: 'form/form',
    tagName: 'form',
    attributes: function(){
      return {
        'data-type': this.getDataType()
      };
    },
    regions: {
      formContentRegion: '#form-content-region'
    },
    ui: {
      buttonContainer: 'ul.inline-list'
    },
    initialize: function(){
      this.setInstancePropertiesFor('config', 'buttons');
    },
    serializeData: function(){
      return {
        footer: this.config.footer,
        buttons: this.buttons ? this.buttons.toJSON() : false
      };
    },
    onShow: function(){
      var _this = this;
      _.defer(function(){
        _this.focusFirstInput();
        if (_this.buttons) _this.placeButtons();
      });
    },
    focusFirstInput: function(){
      if (this.config.focusFirst) {
        this.$el.find(':input:visible:enabled:first').focus();
      }
    },
    placeButtons: function(){
      this.ui.buttonContainer.addClass(this.buttons.location);
    },
    getDataType: function(){
      return this.model.isNew() ? 'new' : 'edit';
    }
  });

});
