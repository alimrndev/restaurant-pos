import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavbarBottomComponent extends Component {
  @service('cart') cart;
  @service('order') order;
  @service('menu') menu;
  @service('session') session;
  @tracked display = 'none';
  @tracked newOrder = {};

  @action
  showModal() {
    return (this.display = 'block');
  }

  @action
  hideModal() {
    return (this.display = 'none');
  }

  @action
  createNewOrder() {
    const customerId = this.session.dataLogin.userId;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const orderNumber = `ORD-${customerId}${year}${month}${day}${hours}${minutes}${seconds}`;
    const orderStatus = 'waiting-payment';

    const payload = {
      customer_id: customerId,
      order_number: orderNumber,
      order_status: orderStatus,
      qty: this.cart.qty,
      subtotal_price: this.cart.subtotal,
      tax_percentage: this.cart.tax_percentage,
      tax_price: this.cart.tax,
      total_price: this.cart.total,
    };
    this.order.createOrder(payload);

    return;
  }

  get isBtnMenu() {
    const { isMenu } = this.args;
    if (isMenu) {
      return 'bg-black text-white';
    } else {
      return 'bg-white text-black';
    }
  }

  get isBtnOrder() {
    const { isOrder } = this.args;
    if (isOrder) {
      return 'bg-black text-white';
    } else {
      return 'bg-white text-black';
    }
  }

  get isBtnHistory() {
    const { isHistory } = this.args;
    if (isHistory) {
      return 'bg-black text-white';
    } else {
      return 'bg-white text-black';
    }
  }

  get isBtnUser() {
    const { isUser } = this.args;
    if (isUser) {
      return 'bg-black text-white';
    } else {
      return 'bg-white text-black';
    }
  }

  get isIconMenu() {
    const { isMenu } = this.args;
    if (isMenu) {
      return 'text-white';
    } else {
      return 'text-black';
    }
  }

  get isIconOrder() {
    const { isOrder } = this.args;
    if (isOrder) {
      return 'text-white';
    } else {
      return '';
    }
  }

  get isIconHistory() {
    const { isHistory } = this.args;
    if (isHistory) {
      return 'text-white';
    } else {
      return 'text-black';
    }
  }

  get isIconUser() {
    const { isUser } = this.args;
    if (isUser) {
      return 'text-white';
    } else {
      return 'text-black';
    }
  }
}
