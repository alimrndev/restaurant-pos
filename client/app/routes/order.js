import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrderRoute extends Route {
  @service('session') session;

  async model() {
    console.log('Init API checkLogin');
    this.session.checkLogin();
  }
}
