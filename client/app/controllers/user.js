import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UserController extends Controller {
  @service('session') session;
  @service('cart') cart;
  @service('user') user;
  @service('menu') menu;
  @service('order') order;
}
