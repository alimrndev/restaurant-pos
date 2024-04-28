import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class OrderController extends Controller {
  @service('cart') cart;

  get isEmpty() {
    if (this.cart.itemList.length) {
      return false;
    } else {
      return true;
    }
  }
}
