import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service('user') user;

  async model() {
    console.log('Init API getOneUser');
    this.user.getOneUser(6);
  }
}
