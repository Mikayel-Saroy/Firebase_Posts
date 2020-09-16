import EmberRouter from '@ember/routing/router';
import config from 'm-tuts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('sign-in');
  this.route('sign-up');

  this.route('authenticated', { path: '' }, function() {
    this.route('my-profile');
    this.route('posts');
    this.route('add-post');
    this.route('show-post', {path: '/:post_id'});
    // eslint-disable-next-line ember/routes-segments-snake-case
    this.route('edit-post', {path: '/:post_id/edit-post'});
  });
});
