App.module('Collections', function(Collections, App, Backbone, Marionette, $, _){

  Collections.Buttons = Collections.Main.extend({
    model: App.Models.Button
  });

  var API = {
    getConfiguredButtons: function(buttons, model){
      var buttonsArray = [];
      buttons = this.getDefaultButtons(buttons, model);

      if (buttons.secondary !== false) {
        buttonsArray.push({
          type: 'secondary',
          classNames: 'button tiny secondary',
          text: buttons.secondary
        });
      }

      if (buttons.primary !== false) {
        buttonsArray.push({
          type: 'primary',
          classNames: 'button tiny',
          text: buttons.primary
        });
      }

      if (buttons.location === 'left') {
        buttonsArray.reverse();
      }

      buttonCollection = new Collections.Buttons(buttonsArray);
      buttonCollection.location = buttons.location;

      return buttonCollection;
    },
    getDefaultButtons: function(buttons, model){
      return _.defaults(buttons, {
        primary: model.isNew() ? 'Create' : 'Update',
        secondary: 'Cancel',
        location: 'right'
      });
    }
  };

  App.reqres.setHandler('form:buttons', function(buttons, model){
    buttons = buttons || {};
    return API.getConfiguredButtons(buttons, model);
  });

});
