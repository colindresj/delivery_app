// overwriting the default renderer function of Marionette in order
// to use more relative paths in the view files
window.JST = window.JST || {};

_.extend(Backbone.Marionette.Renderer, {

  root: 'modules',
  render: function(template, data){
    var path = JST[this.root + template];
    if (!path) {
      throw 'Template ' + template + ' not found!';
    }
    return path(data);
  }

});
