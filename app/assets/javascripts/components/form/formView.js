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
    serializeData: function(){
      return {
        footer: this.options.config.footer,
        buttons: this.options.config.buttons
      };
    },
    onShow: function(){
      var _this = this;
      _.defer(function(){
        _this.focusFirstInput();
      });
    },
    focusFirstInput: function(){
      if (this.options.config.focusFirst) {
        this.$el.find(':input:visible:enabled:first').focus();
      }
    },
    getDataType: function(){
      return this.model.isNew() ? 'new' : 'edit';
    }
  });

});
