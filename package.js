Package.describe({
  summary: 'Web tracing framework wrapper for Meteor',
  version: "0.0.2",
  git: 'https://github.com/eluck/meteor-web-tracing-framework.git'
});

Npm.depends({
  "tracing-framework": "2014.8.18-1"
});

Package.on_use(function (api) {
  api.add_files('import.js', ['server']);
  api.add_files('web-tracing-framework-shim.js', ['client', 'server']);
  api.add_files('export.js', ['client', 'server']);
  api.export('WTF', ['client', 'server']);
});
