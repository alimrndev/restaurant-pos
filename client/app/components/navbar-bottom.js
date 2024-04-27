import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavbarBottomComponent extends Component {
  @service('cart') cart;
  @tracked display = 'none';

  @action
  showModal() {
    return (this.display = 'block');
  }

  @action
  hideModal() {
    return (this.display = 'none');
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
