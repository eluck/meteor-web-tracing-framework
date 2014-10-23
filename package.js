Package.describe({
  summary: 'Web tracing framework wrapper for Meteor',
  version: "0.0.1",
  git: 'git@github.com:eluck/meteor-web-tracing-framework.git'
});

Package.on_use(function (api) {
  api.add_files('web-tracing-framework-shim.js', ['client', 'server']);
  api.add_files('export.js', ['client', 'server']);
  api.export('WTF', ['client', 'server']);
});
