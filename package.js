Package.describe({
  summary: 'Web tracing framework wrapper for Meteor'
});

Package.on_use(function (api) {
  api.add_files('web-tracing-framework-shim.js', ['client', 'server']);
  api.add_files('export.js', ['client', 'server']);
  api.export('WTF', ['client', 'server']);
});
