import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MenuCardComponent extends Component {
  @service('cart') cart;

  @action
  addToCart() {
    const { name, description, picture, price } = this.args;
    this.cart.addItem({
      name,
      description,
      picture,
      price,
    });
  }

  @action
  subToCart() {
    const { name, description, picture, price } = this.args;
    this.cart.subItem({
      name,
      description,
      picture,
      price,
    });
  }

  get qtyCount() {
    const { name } = this.args;
    const item = this.cart.itemList.filter((item) => item.name === name);
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
