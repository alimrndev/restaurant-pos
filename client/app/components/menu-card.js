import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MenuCardComponent extends Component {
  @service('cart') cart;

  @action
  addToCart() {
    const { id, name, description, picture, price } = this.args;
    this.cart.addItem({
      id,
      name,
      description,
      picture,
      price,
    });
  }

  @action
  subToCart() {
    const { id, name, description, picture, price } = this.args;
    this.cart.subItem({
      id,
      name,
      description,
      picture,
      price,
    });
  }

  get qtyCount() {
    const { id } = this.args;
    const item = this.cart.itemList.filter((item) => item.id === id);
    if (item.length) {
      return item[0].count;
    } else {
      return 0;
    }
  }

  get isDeleted() {
    if (this.qtyCount === 1) {
      return true;
    }
  }

  get isQtyZero() {
    if (this.qtyCount === 0) {
      return true;
    }
  }
}
