import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MenuCardComponent extends Component {
  @service('cart') cart;

  @action
  addToCart() {
    const { menu } = this.args;
    const { id, name, description, picture, price, stock } = menu;
    if (this.qtyCount < stock) {
      this.cart.addItem({
        id,
        name,
        description,
        picture,
        price,
        stock,
      });
    }
  }

  @action
  subToCart() {
    const { menu } = this.args;
    const { id, name, description, picture, price, stock } = menu;
    this.cart.subItem({
      id,
      name,
      description,
      picture,
      price,
      stock,
    });
  }

  get qtyCount() {
    const { menu } = this.args;
    const { id } = menu;
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

  get isStockEmpty() {
    const { menu } = this.args;
    const { stock } = menu;
    if (this.qtyCount >= stock) {
      return true;
    }
  }
}
