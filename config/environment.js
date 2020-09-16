'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'm-tuts',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
      apiKey: "AIzaSyAIArH8gDWH5glngddSJFoKq5s3Ra8kJyY",
      authDomain: "ember-firebase-posts.firebaseapp.com",
      databaseURL: "https://ember-firebase-posts.firebaseio.com",
      projectId: "ember-firebase-posts",
      storageBucket: "ember-firebase-posts.appspot.com",
      messagingSenderId: "724477555940",
      appId: "1:724477555940:web:9629cfec1e65dade37a8f1",
      measurementId: "G-S7KF4TFECN"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
