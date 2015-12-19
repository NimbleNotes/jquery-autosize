Package.describe({
  name: 'nimblenotes:jquery-autosize',
  summary: 'jquery-autosize v1.17.8 - Automatically adjust textarea height based on user input.',
  version: '0.0.1',
  git: "https://github.com/copleykj/jquery-autosize.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('jquery', 'client');
  api.add_files(['lib/jquery.autosize.js'], 'client');
  
});
