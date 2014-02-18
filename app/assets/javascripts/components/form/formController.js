App.module('Components.Form', function(Form, App, Backbone, Marionette, $, _){

  Form.Controller = Marionette.Controller.extend({

    initialize: function(options){
      this.contentView = options.view;
      this.formLayout = this.getFormLayout(options.settings);

      // Add a show event listener on this.formLayout with cb as this.showFormContentRegion
      // This event is automatically removed when the controller is closed
      this.listenTo(this.formLayout, 'show', this.showFormContentRegion);

      // Close the controller when its view closes
      this.listenTo(this.formLayout, 'close', this.close);
    },
    showFormContentRegion: function(){
      this.formLayout.formContentRegion.show(this.contentView);
    },
    getFormLayout: function(settings){
      var config, configuredButtons;

      config = this.getDefaultSettings(_.result(this.contentView, 'formSettings'));
      configuredButtons = this.getButtons(config.buttons);

      return new Form.formWrapper({
        model: this.contentView.model,
        config: config,
        buttons: configuredButtons
      });
    },
    getDefaultSettings: function(config){
      config = config || {};

      if (!this.contentView.model) {
        throw 'No model in content view!';
      }

      return _.defaults(config, {
        footer: true,
        focusFirst: true
      });
    },
    getButtons: function(buttons){
      if (buttons !== false) {
        return App.request('form:buttons', buttons, this.contentView.model);
      } else {
        return false;
      }
    }
  });

  App.reqres.setHandler('form:wrapper', function(contentView, options){
    options = options || {};

    // Marionette controllers only accept one argument, so we send in an object
    var formController = new Form.Controller({
      view: contentView,
      settings: options
    });

    return formController.formLayout;
  });

});
