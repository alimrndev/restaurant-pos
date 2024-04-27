import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MenuRoute extends Route {
  @service('user') user;
  @service('menu') menu;

  async model() {
    console.log('Init API getOneUser');
    this.user.getOneUser(6);
    console.log('Init API getAllMenu');
    this.menu.getAllMenu();
  }
}
