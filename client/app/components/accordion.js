import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AccordionComponent extends Component {
  @service('cart') cart;

  get qty() {
    const { itemList } = this.args;
    return itemList.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }

  get subtotal() {
    const { itemList } = this.args;
    return itemList.reduce((acc, item) => {
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
    const { itemList } = this.args;
    if (itemList.length) {
      return false;
    } else {
      return true;
    }
  }

  get bgColor() {
    const { status } = this.args;
    if (status === "pending" || status === "waiting-payment") {
      return "danger";
    }

    if (status === "in-progress") {
      return "warning";
    } 

    if (status === "ready") {
      return "info";
    } 

    if (status === "completed") {
      return "success";
    } 
      
    return "danger";
  }

  get isPay() {
    const { status } = this.args;
    if (status === "pending" || status === "waiting-payment") {
      return true;
    }
  }

  get isShow() {
    if (this.isPay) {
      return "show";
    }
  }

}
