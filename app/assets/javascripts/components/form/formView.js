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
      buttonContainer: 'ul.inline-list',

    },
    serializeData: function(){
      return {
        footer: this.options.config.footer,
        buttons: this.options.buttons ? this.options.buttons.toJSON() : false
      };
    },
    onShow: function(){
      var _this = this;
      _.defer(function(){
        _this.focusFirstInput();
        if (_this.options.buttons) _this.buttonPlacement();
      });
    },
    focusFirstInput: function(){
      if (this.options.config.focusFirst) {
        this.$el.find(':input:visible:enabled:first').focus();
      }
    },
    placeButtons: function(){
      this.ui.buttonContainer.addClass(this.options.buttons.location);
    },
    getDataType: function(){
      return this.model.isNew() ? 'new' : 'edit';
    }
  });

});
