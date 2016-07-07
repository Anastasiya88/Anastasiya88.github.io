requirejs.config({
  baseUrl: "js",
  paths: {
    'jquery': 'https://code.jquery.com/jquery-1.12.3',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});
require(
  [
    'model',
    'jquery',
    'tmpl',
    'view',
    'controller'

  ],
  function(model, $, tmpl, view, controller) {

  }
);
