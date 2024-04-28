import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AccordionComponent extends Component {
  @service('order') order;
  @service('menu') menu;

  @action
  seeDetail() {
    const { orderList } = this.args;
    const isHistoryExist = this.order.datas.some(item => item.id === orderList.id && item.history);
    if (!isHistoryExist) {
      this.order.getAllOrderItems(orderList.id);
    }
  }

  get orderDate() {
    const { orderList } = this.args;
    if (orderList.order_date) {
      const date = new Date(orderList.order_date);
      const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Jakarta' };
      return date.toLocaleDateString('en-US', options);
    }
    return "";
  }
  get bgColor() {
    const { orderList } = this.args;
    if (orderList.order_status === 'pending' || orderList.order_status === 'waiting-payment') {
      return 'danger';
    }

    if (orderList.order_status === 'progress') {
      return 'warning';
    }

    if (orderList.order_status === 'ready') {
      return 'info';
    }

    if (orderList.order_status === 'completed') {
      return 'success';
    }

    return 'danger';
  }

  get isPay() {
    const { orderList } = this.args;
    if (orderList.order_status === 'pending' || orderList.order_status === 'waiting-payment') {
      return true;
    }
  }

  get isShow() {
    if (this.isPay) {
      return 'show';
    }
  }
}
