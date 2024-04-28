import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HistoryRoute extends Route {
  @service('menu') menu;
  @service('order') order;
  @service('session') session;

  async model() {
    console.log('Init API checkLogin');
    this.session.checkLogin();
    console.log('Init API getAllMenu');
    this.menu.getAllMenu();
    console.log('Init API getAllOrderByUserId', this.session.data.id);
    this.order.getAllOrderByUserId(this.session.data.id);
  }
}
