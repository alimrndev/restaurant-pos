import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MenuRoute extends Route {
  @service('session') session;
  @service('menu') menu;

  async model() {
    console.log('Init API checkLogin');
    this.session.checkLogin();
    console.log('Init API getAllMenu');
    this.menu.getAllMenu();
  }
}
