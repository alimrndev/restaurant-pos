import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HistoryController extends Controller {
  @service('order') order;

  get orderHistory() {
    if (this.order.datas.length > 0) {
      return this.order.datas.sort((a, b) => b.id - a.id);
    }
    return [];
  }

  get isEmpty() {
    if (this.order.datas.length) {
      return false;
    } else {
      return true;
    }
  }
}
