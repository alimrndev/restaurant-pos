import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import { action } from '@ember/object';

export default class UserController extends Controller {
  @service('cart') cart;
  @service('user') user;

  // get user() {
  //   return this.model;
  // }

  // @action
  // async getOneUser() {
  //   return this.crud.getOneUser(1) ? true : false;

  // }
}
