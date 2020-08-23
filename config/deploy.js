/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
  let ENV = {
    build: {},

    git: {
      repo: 'git@github.com:mupkoo/hex.git',
      worktreePath: 'dist-deploy',
      skipUpload: process.env.DEPLOY_SKIP_UPLOAD
    }
  };


  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';

    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    // configure other plugins for production deploy target here
  }

  if (process.env.DEPLOY_KEY_PATH) {
    ENV['git-ci'] = {
      deployKeyPath: process.env.DEPLOY_KEY_PATH
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
