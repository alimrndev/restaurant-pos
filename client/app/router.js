import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('login');
  this.route('register');
  this.route('menu');
  this.route('user');
  this.route('order');
  this.route('invoice');
  this.route('history');
});
