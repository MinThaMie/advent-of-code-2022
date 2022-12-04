import EmberRouter from '@ember/routing/router';
import config from 'advent-of-code-2022/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('puzzles', function () {
    this.route('1');
    this.route('2');
    this.route('3');
  });
});
