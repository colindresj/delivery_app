window.App = (function(Backbone, Marionette){
  var application = new Marionette.Application();

  application.rootRoute = window.Routes.staff_index_path();

  application.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  application.addInitializer(function(){
    application.module('HeaderModule').start();
    application.module('FooterModule').start();
  });

  application.on('initialize:after', function(){

    // starting the Backbone History object based off custom config method on application object
    this.startHistory();
    if (this.getCurrentRoute() === '') this.navigate(this.rootRoute, {trigger: true});
  });

  return application;
})(Backbone, Marionette);


// Start this up baby!
$(function(){
  $(document).foundation();
  App.start();
});
