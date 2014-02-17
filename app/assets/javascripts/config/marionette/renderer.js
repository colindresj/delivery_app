// overwriting the default renderer function of Marionette in order
// to use more relative paths in the view files
window.JST = window.JST || {};

_.extend(Backbone.Marionette.Renderer, {

  roots: ['modules', 'components'],
  render: function(template, data){
    var path = this.getTemplate(template);
    if (!path) throw 'Template ' + template + ' not found!';
    return path(data);
  },
  getTemplate: function(template){
    var path, _i, _len, _ref, result;

    // loop through both /templates and without /templates to shorten relative path
    _ref = [template, template.split('/').insertAt(-1, 'templates').join('/')];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      path = _ref[_i];

      // loop through each of the roots to look for the template file
      for (var i = this.roots.length - 1; i >= 0; i--) {
        var root = this.roots[i];
        if (JST[root + '/' + path]) {
          result = JST[root + '/' + path];
        }
      }
    }
    return result;
  }

});
