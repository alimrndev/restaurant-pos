import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HistoryRoute extends Route {
  @service('user') user;
  @service('menu') menu;
  @service('order') order;

  async model() {
    console.log('Init API getOneUser');
    this.user.getOneUser(6);
    console.log('Init API getAllMenu');
    this.menu.getAllMenu();
    console.log('Init API getAllOrderByUserId');
    this.order.getAllOrderByUserId(6);
  }
}