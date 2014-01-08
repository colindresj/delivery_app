window.App = (function(Backbone, Marionette){
  var application = new Marionette.Application();
  return application;
})(Backbone, Marionette);


// Start this up baby!
$(function(){
  $(document).foundation();
  App.start({
    currentUser: gon.current_user
  });
});
