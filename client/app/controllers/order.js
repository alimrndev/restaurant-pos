import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class OrderController extends Controller {
  @service('cart') cart;

  get qty() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.11 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  get isEmpty() {
    if (this.cart.itemList.length) {
      return false;
    } else {
      return true;
    }
  }
}
